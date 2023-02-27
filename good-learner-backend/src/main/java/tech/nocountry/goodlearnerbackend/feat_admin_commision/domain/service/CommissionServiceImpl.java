package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request.CommissionRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.response.CommissionCreatedResponse;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.response.CommissionWithStudentResponse;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.response.StudentResponse;
import tech.nocountry.goodlearnerbackend.model.Commission;
import tech.nocountry.goodlearnerbackend.model.Inscription;
import tech.nocountry.goodlearnerbackend.model.Shift;
import tech.nocountry.goodlearnerbackend.repository.CommissionRepository;
import tech.nocountry.goodlearnerbackend.repository.CommissionSubjectRepository;
import tech.nocountry.goodlearnerbackend.repository.InscriptionRepository;
import tech.nocountry.goodlearnerbackend.repository.ShiftRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommissionServiceImpl implements ICommissionService {

    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Autowired
    private CommissionRepository commissionRepository;
    @Autowired
    private ShiftRepository shiftRepository;
    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;

    @Override
    public ResponseEntity<?> findCommissionById(Long idCommission) {
        Optional<Commission> commissionOptional = commissionRepository.findById(idCommission);
        if(commissionOptional.isPresent()){
            Commission commission = commissionOptional.get();

            List<Inscription> inscriptions = inscriptionRepository.findAllByIdCommission(commission);
            List<StudentResponse> students = new ArrayList<>();

            inscriptions.forEach(inscription -> {
                students.add(new StudentResponse(
                        inscription.getStudent().getFirstName() + " " + inscription.getStudent().getLastName()
                ));
            });

            return ResponseEntity.ok( new CommissionWithStudentResponse(
                    commission.getCommissionId(),
                    commission.getCourse() + commission.getDivision(),
                    commission.getSchoolYear(),
                    commission.getShift().getShiftName(),
                    students
            ));
        }
        return new ResponseEntity<>("No se ha encontrado la Comisión", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> createCommission(CommissionRequest commissionRequest) {
        Optional<Shift> shiftOpt = shiftRepository.findShiftByName(commissionRequest.getShiftName());
        if(shiftOpt.isEmpty()){
            return new ResponseEntity<>("No se ha encontrado el turno solicitado", HttpStatus.NOT_FOUND);
        }
        Commission commission = commissionRepository.save(new Commission(
                commissionRequest.getCourse(),
                commissionRequest.getDivision(),
                commissionRequest.getYear(),
                shiftOpt.get()
        ));


        return ResponseEntity.ok(new CommissionCreatedResponse(
                commission.getCommissionId(),
                commission.getCourse() + commission.getDivision(),
                commission.getSchoolYear(),
                commission.getShift().getShiftName()
        ));
    }

    @Override
    public ResponseEntity<?> updateCommission(CommissionRequest commissionRequest) {
        return null;
    }

    @Override
    public boolean deleteCommission(Long idCommission) {
        return false;
    }


}
