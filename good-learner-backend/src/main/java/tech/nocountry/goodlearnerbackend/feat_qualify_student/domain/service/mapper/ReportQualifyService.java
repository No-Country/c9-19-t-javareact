package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.service.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.QuerydslJpaRepository;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.QualifyStudentResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.ReportQualificationsResponseDTO;
import tech.nocountry.goodlearnerbackend.model.Qualification;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.repository.QualificationRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportQualifyService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private QualificationRepository qualificationRepository;
    @Autowired
    private StudentRepository studentRepository;

    public ReportQualificationsResponseDTO getReport(String username, Integer year){

        User user = userRepository.buscarPorNombreUsuario(username).orElse(null);
        if(user == null ) return null;

        Student student = (Student) user.getPerson();

        List<Qualification> qualifications = qualificationRepository.findByStudent(student);

        List<QualifyStudentResponseDTO> qualifyStudentResponseDTOList = new ArrayList<>();

        String course = qualifications.get(0).getCommissionSubject().getCommissionId().getCourse() + qualifications.get(0).getCommissionSubject().getCommissionId().getDivision();


        qualifications.forEach(qualification -> {
            if(year == qualification.getCommissionSubject().getCommissionId().getSchoolYear()){
            qualifyStudentResponseDTOList.add(new QualifyStudentResponseDTO(
                    qualification.getCommissionSubject().getSubjectId().getSubjectName(),
                    qualification.getPeriod().getPeriodName(),
                    qualification.getNumericalNote()
                    ));}
        });


        return new ReportQualificationsResponseDTO(
                student.getFirstName() + " " + student.getLastName(),
                course,
                year,
                qualifyStudentResponseDTOList
                );
    }
}
