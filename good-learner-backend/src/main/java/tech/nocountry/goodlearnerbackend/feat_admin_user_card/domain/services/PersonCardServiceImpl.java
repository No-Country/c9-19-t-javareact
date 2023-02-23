package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository.StudentPageRepository;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.StudentResponse;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.SwitchStateStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Role;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.services.mapper.PersonDetailMapper;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class PersonCardServiceImpl implements PersonCardService {

    private final Logger log = LoggerFactory.getLogger(PersonCardServiceImpl.class);
    @Autowired
    private PersonDetailMapper personDetailMapper;
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private StudentPageRepository studentPageRepository;


    /**
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public ResponseEntity<PersonDetailDTO> findPerson(Long id) throws Exception {

        Optional<Person> personOptional = personRepository.findById(id);


        if(personOptional.isPresent()) {

            User user = userRepository.buscarPorIdPerson(personOptional.get()).orElse(null);

            PersonDetailDTO personDetailDTO = personDetailMapper.toPersonDetail(user);
            return ResponseEntity.ok(personDetailDTO);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Actualizar una Persona
     * @param personDetailDTO
     * @return ResponseEntity
     * @throws Exception
     */
    @Override
    public ResponseEntity<PersonDetailDTO> updatePerson(PersonDetailDTO personDetailDTO) throws Exception {
        if(personDetailDTO.getIdPerson() == null){
            log.warn("Trying to update a non existent Person");
            return ResponseEntity.badRequest().build();
        }
        ;
        if(!personRepository.existsById(personDetailDTO.getIdPerson())){
            log.warn("Trying to update a non existent Person");
        }

        Person person = personRepository.findById(personDetailDTO.getIdPerson()).orElseThrow();

        person.setFirstName(personDetailDTO.getFirstName());
        person.setLastName(personDetailDTO.getLastName());
        person.setBirthDate(personDetailDTO.getBirthDate());
        person.setTimeStamp(LocalDateTime.now());
        person.setEmail(personDetailDTO.getEmail());
        person.setPhone(personDetailDTO.getPhone());
        personRepository.save(person);

        User user = userRepository.buscarPorIdPerson(person).orElse(null);
        personDetailDTO.setIdUser(user.getId());
        personDetailDTO.setUsername(user.getUsername());
        personDetailDTO.setRoleName(user.getRol().getNombreRol());
        personDetailDTO.setDocument(person.getDocument());

        return ResponseEntity.ok(personDetailDTO);
    }

    @Override
    public StudentResponse switchStateStudent(SwitchStateStudentRequest switchStateStudentRequest) throws Exception {
        Optional<Student> studentOptional = studentRepository.findById(switchStateStudentRequest.getId());

        if(studentOptional.isEmpty()){
            log.warn("Trying to delete a non existent Student");
            return null;
        }

        Student student = studentOptional.get();
        student.setIsRegular(switchStateStudentRequest.getState());
        studentRepository.save(student);


        return new StudentResponse(
                student.getFirstName() + " " + student.getLastName(),
                student.getDocument(),
                RoleName.STUDENT,
                student.getIsRegular()
        );
    }


}
