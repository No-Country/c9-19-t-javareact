package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserDTO;

@Component
public class UserMapper {
    public UserDTO userDTO(User user){
        return new UserDTO(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getRol().getNombreRol(),
                user.getPerson().getIdPerson()
        );
    }
}
