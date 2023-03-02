package tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.model.request.TeacherSubjectRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.model.response.TeacherSubjectCommissionResponse;
import tech.nocountry.goodlearnerbackend.model.CommissionSubject;
import tech.nocountry.goodlearnerbackend.model.Teacher;
import tech.nocountry.goodlearnerbackend.repository.CommissionSubjectRepository;
import tech.nocountry.goodlearnerbackend.repository.TeacherRepository;

import java.util.Optional;

@Service
public class CommissionSubjectServiceImpl implements ICommissionSubjectService{

    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public ResponseEntity<?> updateTeacherSubject(TeacherSubjectRequest teacherSubjectRequest) {
        Optional<CommissionSubject> commissionSubjectOptional = commissionSubjectRepository.findById(teacherSubjectRequest.getIdCommissionSubject());
        Optional<Teacher> teacher = teacherRepository.findById(teacherSubjectRequest.getIdTeacher());

        if(commissionSubjectOptional.isPresent()){
            if(teacher.isPresent()){
                 CommissionSubject commissionSubject = commissionSubjectOptional.get();
                 commissionSubject.setTeacherId(teacher.get());
                 commissionSubjectRepository.save(commissionSubject);
                 return ResponseEntity.ok(
                         new TeacherSubjectCommissionResponse(
                            commissionSubject.getIdCommissionSubject(),
                            commissionSubject.getSubjectId().getSubjectId(),
                            commissionSubject.getTeacherId().getIdPerson(),
                            commissionSubject.getCommissionId().getCommissionId(),
                            commissionSubject.getDayId().getDayName(),
                            commissionSubject.getStartTime(),
                            commissionSubject.getEndTime()
                 ));
            } else {
                return new ResponseEntity<>("No se ha encontrado al Profesor", HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>("No se ha encontrado a la comisión/asignatura.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> deleteTeacherSubject(TeacherSubjectRequest teacherSubjectRequest) {
        return null;
    }
}
