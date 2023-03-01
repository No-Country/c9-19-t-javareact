package tech.nocountry.goodlearnerbackend.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.domain.model.request.InscriptionRequest;
import tech.nocountry.goodlearnerbackend.domain.model.request.InscriptionUpdateRequest;
import tech.nocountry.goodlearnerbackend.domain.model.response.InscriptionResponse;
import tech.nocountry.goodlearnerbackend.model.Commission;
import tech.nocountry.goodlearnerbackend.model.Inscription;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.repository.CommissionRepository;
import tech.nocountry.goodlearnerbackend.repository.InscriptionRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class InscriptionServiceImpl implements IInscriptionService {

    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private CommissionRepository commissionRepository;

    @Override
    public ResponseEntity<?> createdInscriptionFromStudent(InscriptionRequest inscriptionRequest) {
        Optional<Student> studentOptional = studentRepository.findById(inscriptionRequest.getIdStudent());
        Optional<Commission> commissionOptional = commissionRepository.findById(inscriptionRequest.getIdCommission());

        if(studentOptional.isPresent() && commissionOptional.isPresent()){
            List<Inscription> inscriptionList = inscriptionRepository.findAllByIdStudentAndCommission(studentOptional.get(), commissionOptional.get());
            if(inscriptionList.size() > 0){
                return new ResponseEntity<>("El alumno ya posee inscripción en la comisión", HttpStatus.CONFLICT);
            }
            Inscription inscription = inscriptionRepository.save(new Inscription(
                    inscriptionRequest.getInscriptionDate(),
                    studentOptional.get(),
                    commissionOptional.get()));
            return ResponseEntity.ok(
                    new InscriptionResponse(
                            inscription.getIdInscription(),
                            inscription.getInscriptionDate(),
                            inscription.getCommission().getCommissionId(),
                            inscription.getStudent().getIdPerson()
                            )
            );
        }
        return new ResponseEntity<>("No se ha encontrado al Estudiante o Comisión", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> findInscriptionById(Long idInscription) {
        Optional<Inscription> inscription = inscriptionRepository.findById(idInscription);
        if(inscription.isPresent()){
            return ResponseEntity.ok(new InscriptionResponse(
                    inscription.get().getIdInscription(),
                    inscription.get().getInscriptionDate(),
                    inscription.get().getCommission().getCommissionId(),
                    inscription.get().getStudent().getIdPerson()
            ));
        }
        return new ResponseEntity<>("No se ha encontrado inscripción", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> deleteInscriptionById(Long idInscription) {
        Optional<Inscription> inscription = inscriptionRepository.findById(idInscription);
        if(inscription.isPresent()){
            inscriptionRepository.delete(inscription.get());
            return ResponseEntity.noContent().build();
        }
        return new ResponseEntity<>("No se ha encontrado inscripción", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateInscriptionById(InscriptionUpdateRequest inscriptionRequest) {
        return null;
    }
}
