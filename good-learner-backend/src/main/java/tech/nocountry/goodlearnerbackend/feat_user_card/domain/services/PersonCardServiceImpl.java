package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper.PersonDetailMapper;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;

import java.util.Optional;

@Service
public class PersonCardServiceImpl implements PersonCardService {

    @Autowired
    PersonDetailMapper personDetailMapper;
    @Autowired
    PersonRepository personRepository;

    @Override
    public ResponseEntity<PersonDetailDTO> findPerson(Long id) throws Exception {

        Optional<Person> personOptional = personRepository.findById(id);

        if(personOptional.isPresent()){
            PersonDetailDTO personDetailDTO = personDetailMapper.toPersonDetail(personOptional.get());
            return ResponseEntity.ok(personDetailDTO);
        }
        return ResponseEntity.notFound().build();
    }
}
