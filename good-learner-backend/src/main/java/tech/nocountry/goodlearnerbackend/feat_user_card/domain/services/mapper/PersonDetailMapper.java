package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.model.Person;

@Component
public class PersonDetailMapper {

    public PersonDetailDTO toPersonDetail(Person person){
        return new PersonDetailDTO(
                person.getIdPerson(),
                person.getFirstName(),
                person.getLastName(),
                person.getDocument(),
                person.getBirthDate(),
                person.getEmail(),
                person.getPhone()
        );
    }
}
