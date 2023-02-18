package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.data.repository.PersonPageRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper.PersonDetailMapper;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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
    private PersonPageRepository personPageRepository;

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
    public ResponseEntity<PersonDetailDTO> deletePersonById(Long id) throws Exception {
        Optional<Person> personOptional = personRepository.findById(id);

        if(personOptional.isEmpty()){
            log.warn("Trying to delete a non existent Person");
            return ResponseEntity.notFound().build();
        }

        Person person = personOptional.get();

        Optional<User> user = userRepository.buscarPorNombreUsuario(person.getDocument());



        personRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

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

}
