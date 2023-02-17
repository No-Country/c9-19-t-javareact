package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.model.Person;

import java.time.LocalDateTime;

@Component
public class PersonMapper {

    public Person toPerson(PersonDetailDTO personDetailDTO){
        return new Person(
                personDetailDTO.getIdPerson(),
                personDetailDTO.getFirstName(),
                personDetailDTO.getLastName(),
                personDetailDTO.getDocument(),
                personDetailDTO.getBirthDate(),
                personDetailDTO.getEmail(),
                LocalDateTime.now(),
                personDetailDTO.getPhone()
        );
    }
}
