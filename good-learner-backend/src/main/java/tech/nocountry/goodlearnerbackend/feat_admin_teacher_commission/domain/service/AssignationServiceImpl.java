package tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.request.AssignationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.request.AssignationUpdateRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.response.AssignationResponse;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class AssignationServiceImpl implements IAssignationService {

    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private CommissionRepository commissionRepository;
    @Autowired
    private SubjectRepository subjectRepository;
    @Autowired
    private DayRepository dayRepository;

    @Override
    public ResponseEntity<?> createCommissionAssignation(AssignationRequest assignationRequest) {
        Optional<Teacher> teacherOptional = teacherRepository.findById(assignationRequest.getIdTeacher());
        Optional<Commission> commissionOptional = commissionRepository.findById(assignationRequest.getIdCommission());
        Optional<Subject> subjectOptional = subjectRepository.findById(assignationRequest.getSubjectId());
        List<Day> dayOptional = dayRepository.findAllByName(assignationRequest.getDayName());
        if(teacherOptional.isPresent() && commissionOptional.isPresent() && subjectOptional.isPresent()){
            List<CommissionSubject> commissionSubjectList = commissionSubjectRepository.findAllByIdTeacherAndCommission(teacherOptional.get(), commissionOptional.get(), subjectOptional.get());
            if(commissionSubjectList.size() > 0){
                return new ResponseEntity<>("Teacher is already assigned to the commission selected", HttpStatus.CONFLICT);
            }
            CommissionSubject commissionSubject = commissionSubjectRepository.save(new CommissionSubject(
                    subjectOptional.get(),
                    teacherOptional.get(),
                    dayOptional.get(0),
                    commissionOptional.get(),
                    assignationRequest.getStartTime(),
                    assignationRequest.getEndTime()
                    ));
            return ResponseEntity.ok(
                    new AssignationResponse(
                            commissionSubject.getIdCommissionSubject(),
                            commissionSubject.getStartTime(),
                            commissionSubject.getCommissionId().getCommissionId(),
                            commissionSubject.getTeacherId().getIdPerson()
                    )
            );
        }
        return new ResponseEntity<>("Teacher or Commission not found", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> deleteCommissionAssignationById(Long idAssignation) {
        return null;
    }

    @Override
    public ResponseEntity<?> findCommissionAssignationById(Long idAssignation) {
        return null;
    }

    @Override
    public ResponseEntity<?> updateCommissionAssignationById(AssignationUpdateRequest assignationRequest) {
        return null;
    }



    /*
    @Override
    public ResponseEntity<?> findInscriptionById(Long idInscription) {
        Optional<Inscription> inscription = inscriptionRepository.findById(idInscription);
        if(inscription.isPresent()){
            return ResponseEntity.ok(new AssignationResponse(
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
    public ResponseEntity<?> updateInscriptionById(AssignationUpdateRequest inscriptionRequest) {
        return null;
    }*/
}
