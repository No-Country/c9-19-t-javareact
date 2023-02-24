package tech.nocountry.goodlearnerbackend.feat_admin_dashboard.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository.PersonPageRepository;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository.StudentPageRepository;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository.TeacherPageRepository;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository.TutorPageRepository;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.domain.model.PersonByRoleResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.domain.model.PersonResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.model.Teacher;
import tech.nocountry.goodlearnerbackend.model.Tutor;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashBoarServiceImpl implements DashBoarService {
    @Autowired
    private PersonPageRepository personPageRepository;
    @Autowired
    private StudentPageRepository studentPageRepository;

    @Autowired
    private TutorPageRepository tutorPageRepository;

    @Autowired
    private TeacherPageRepository teacherPageRepository;

    @Override
    public List<PersonByRoleResponseDTO> findAllPeoplePage(Pageable pageable) throws Exception {
        List<Student> students= studentPageRepository.findAll(pageable).stream().toList();
        List<Teacher> teachers = teacherPageRepository.findAll(pageable).stream().toList();
        List<Tutor> tutors = tutorPageRepository.findAll(pageable).stream().toList();

        List<PersonByRoleResponseDTO> peopleResponse = new ArrayList<>();

        students.forEach(student -> {
            peopleResponse.add(new PersonByRoleResponseDTO(student.getIdPerson(), student.getFirstName() + " " +  student.getLastName(), RoleName.STUDENT));
        });
        teachers.forEach(teacher -> {
            peopleResponse.add(new PersonByRoleResponseDTO(teacher.getIdPerson(), teacher.getFirstName() + " " +  teacher.getLastName(), RoleName.TEACHER));
        });
        tutors.forEach(tutor -> {
            peopleResponse.add(new PersonByRoleResponseDTO(tutor.getIdPerson(), tutor.getFirstName() + " " +  tutor.getLastName(), RoleName.TUTOR));
        });
        return peopleResponse;
    }

    @Override
    public List<PersonResponseDTO> findAllStudentPage(Pageable pageable) throws Exception {
        Page page = studentPageRepository.findAll(pageable);

        List<PersonResponseDTO> studentsResponse = new ArrayList<>();

        List<Student> students = page.stream().toList();
        students.forEach(student ->
                studentsResponse.add(new PersonResponseDTO(student.getIdPerson(), student.getFirstName() + " " + student.getLastName())));

        return studentsResponse;
    }

    @Override
    public List<PersonResponseDTO> findAllTutorPage(Pageable pageable) throws Exception {
        Page page = tutorPageRepository.findAll(pageable);

        List<PersonResponseDTO> tutorsResponse = new ArrayList<>();

        List<Tutor> tutors = page.stream().toList();
        tutors.forEach(student ->
                tutorsResponse.add(new PersonResponseDTO(student.getIdPerson(), student.getFirstName() + " " + student.getLastName())));

        return tutorsResponse;
    }

    @Override
    public List<PersonResponseDTO> findAllTeacherPage(Pageable pageable) throws Exception {
        Page page = teacherPageRepository.findAll(pageable);

        List<PersonResponseDTO> teachersResponse = new ArrayList<>();

        List<Teacher> teachers = page.stream().toList();
        teachers.forEach(student ->
                teachersResponse.add(new PersonResponseDTO(student.getIdPerson(), student.getFirstName() + " " + student.getLastName())));

        return teachersResponse;
    }
}
