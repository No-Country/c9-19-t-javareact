package tech.nocountry.goodlearnerbackend.feat_dashboard.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository.PersonPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository.StudentPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository.TeacherPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository.TutorPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard.domain.model.PersonResponseDTO;
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
    public List<PersonResponseDTO> findAllPeoplePage(Pageable pageable) throws Exception {
        Page page = personPageRepository.findAll(pageable);

        List<PersonResponseDTO> peopleResponse = new ArrayList<>();

        List<Person> people = page.stream().toList();
        people.forEach(person -> {
            peopleResponse.add(new PersonResponseDTO(person.getIdPerson(), person.getFirstName() + " " + person.getLastName() ));
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
