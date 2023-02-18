package tech.nocountry.goodlearnerbackend.feat_dashboard.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_user_card.data.repository.PersonPageRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.data.repository.StudentPageRepository;
import tech.nocountry.goodlearnerbackend.feat_dashboard.domain.model.PersonResponseDTO;
import tech.nocountry.goodlearnerbackend.model.Person;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashBoarServiceImpl implements DashBoarService {
    @Autowired
    private PersonPageRepository personPageRepository;
    @Autowired
    private StudentPageRepository studentPageRepository;

    @Override
    public List<PersonResponseDTO> loadPersonPage(Pageable pageable) throws Exception {
        Page page = personPageRepository.findAll(pageable);

        List<PersonResponseDTO> peopleResponse = new ArrayList<>();

        List<Person> people = page.stream().toList();
        people.forEach(person -> {
            peopleResponse.add(new PersonResponseDTO(person.getIdPerson(), person.getFirstName() + " " + person.getLastName() ));
        });
        return peopleResponse;
    }

    @Override
    public List<PersonResponseDTO> loadAllStudent(Pageable pageable) throws Exception {
        Page page = studentPageRepository.findAll(pageable);

        List<PersonResponseDTO> studentsResponse = new ArrayList<>();

        List<Person> students = page.stream().toList();
        students.forEach(student ->
                studentsResponse.add(new PersonResponseDTO(student.getIdPerson(), student.getFirstName() + " " + student.getLastName())));

        return studentsResponse;
    }
}
