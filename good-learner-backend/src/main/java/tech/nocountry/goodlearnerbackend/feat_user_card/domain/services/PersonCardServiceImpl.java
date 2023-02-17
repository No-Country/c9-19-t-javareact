package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper.PersonDetailMapper;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper.PersonMapper;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;

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
    private PersonMapper personMapper;

    /**
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public ResponseEntity<PersonDetailDTO> findPerson(Long id) throws Exception {

        Optional<Person> personOptional = personRepository.findById(id);
        //User user = userRepository.buscarPorIdPerson(id).orElse(null);

        if(personOptional.isPresent()) {
            //assert user != null;
            PersonDetailDTO personDetailDTO = personDetailMapper.toPersonDetail(personOptional.get());
            return ResponseEntity.ok(personDetailDTO);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     *
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
        person.setDocument(personDetailDTO.getDocument());
        person.setBirthDate(personDetailDTO.getBirthDate());
        person.setTimeStamp(LocalDateTime.now());
        person.setEmail(personDetailDTO.getEmail());
        person.setPhone(personDetailDTO.getPhone());

        personRepository.save(person);

        return ResponseEntity.ok(personDetailDTO);
    }
}
