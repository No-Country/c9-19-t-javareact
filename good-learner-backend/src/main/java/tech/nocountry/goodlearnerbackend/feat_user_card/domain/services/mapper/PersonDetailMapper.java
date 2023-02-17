package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;

@Component
public class PersonDetailMapper {

    public PersonDetailDTO toPersonDetail(User user){
        return new PersonDetailDTO(
                user.getPerson().getIdPerson(),
                user.getPerson().getFirstName(),
                user.getPerson().getLastName(),
                user.getPerson().getDocument(),
                user.getPerson().getBirthDate(),
                user.getPerson().getEmail(),
                user.getPerson().getPhone(),
                user.getId(),
                user.getNombreUsuario(),
                user.getRol().getNombreRol()
        );
    }
}
