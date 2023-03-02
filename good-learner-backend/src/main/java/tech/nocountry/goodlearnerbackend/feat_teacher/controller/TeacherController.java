package tech.nocountry.goodlearnerbackend.feat_teacher.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import tech.nocountry.goodlearnerbackend.feat_students.domain.mapper.TutorStudentsMapper;
import tech.nocountry.goodlearnerbackend.feat_teacher.domain.dto.TeacherCommissionsDTO;
import tech.nocountry.goodlearnerbackend.feat_teacher.domain.dto.SubjectDTO;
import tech.nocountry.goodlearnerbackend.model.CommissionSubject;
import tech.nocountry.goodlearnerbackend.model.Teacher;
import tech.nocountry.goodlearnerbackend.repository.CommissionSubjectRepository;
import tech.nocountry.goodlearnerbackend.repository.TeacherRepository;

import java.util.*;

@Controller
@RequestMapping("api")
public class TeacherController {

    @Autowired
    private TeacherRepository TeacherRepository;

    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;

    @Autowired
    private TutorStudentsMapper tutorStudentsMapper;

    @GetMapping("/teacher/commissions/{idTeacher}")
    public ResponseEntity<?> getTeacherCommissions(@PathVariable Long idTeacher) {
        Optional<Teacher> teacherOptional =  TeacherRepository.findById(idTeacher);
        if(teacherOptional.isPresent()){
            Teacher teacher = teacherOptional.get();
            List<CommissionSubject> commissions = commissionSubjectRepository.findByTeacherId(teacher);
            List<TeacherCommissionsDTO> teacherCommissions = new ArrayList<>();
            for(int i=0; i< commissions.size(); i++){
                CommissionSubject commission = commissions.get(i);
                boolean existeCommission = false;
                int position = -1;
                for (int j=0; j< teacherCommissions.size(); j++){
                    if(commission.getCommissionId().getCommissionId() == teacherCommissions.get(j).getCommissionId()){
                        position = j;
                        existeCommission = true;
                        break;
                    }
                }
                if (!existeCommission) {
                    TeacherCommissionsDTO data = new TeacherCommissionsDTO();
                    data.setCommissionId((commission.getCommissionId().getCommissionId()));
                    data.setDivision(commission.getCommissionId().getDivision());
                    data.setCourse(commission.getCommissionId().getCourse());
                    data.setSchoolYear(commission.getCommissionId().getSchoolYear());
                    data.setShiftName(commission.getCommissionId().getShift().getShiftName().name());
                    SubjectDTO s = new SubjectDTO(commission.getSubjectId().getSubjectId(), commission.getSubjectId().getSubjectName().name(), commission.getIdCommissionSubject());
                    List<SubjectDTO> subjects = new ArrayList<>();
                    subjects.add(s);
                    data.setSubjects(subjects);
                    teacherCommissions.add(data);
                } else {
                    TeacherCommissionsDTO data = teacherCommissions.get(position);
                    List<SubjectDTO> subjects = data.getSubjects();
                    SubjectDTO s = new SubjectDTO(commission.getSubjectId().getSubjectId(), commission.getSubjectId().getSubjectName().name(), commission.getIdCommissionSubject());
                    subjects.add(s);
                    data.setSubjects(subjects);
                }
            }
            return ResponseEntity.ok(teacherCommissions);

        }
        return new ResponseEntity<>("No se ha encontrado el tutor", HttpStatus.NOT_FOUND);
    }
}
