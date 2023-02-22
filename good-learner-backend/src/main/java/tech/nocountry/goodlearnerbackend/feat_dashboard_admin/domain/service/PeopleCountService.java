package tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;
import tech.nocountry.goodlearnerbackend.feat_dashboard_admin.data.repository.StudentPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard_admin.data.repository.TeacherPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard_admin.data.repository.TutorPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.model.PersonCountDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class PeopleCountService {

    @Autowired
    private StudentPageRepository studentPageRepository;

    @Autowired
    private TeacherPageRepository teacherPageRepository;

    @Autowired
    private TutorPageRepository tutorPageRepository;

    public List<PersonCountDTO> getCountPeople(){
        List<PersonCountDTO> peopleCount = new ArrayList<>();
        peopleCount.add(new PersonCountDTO(RoleName.STUDENT, studentPageRepository.countStudent()));
        peopleCount.add(new PersonCountDTO(RoleName.TEACHER, teacherPageRepository.countTeacher()));
        peopleCount.add(new PersonCountDTO(RoleName.TUTOR, tutorPageRepository.countTutor()));
        return peopleCount;
    }

}
