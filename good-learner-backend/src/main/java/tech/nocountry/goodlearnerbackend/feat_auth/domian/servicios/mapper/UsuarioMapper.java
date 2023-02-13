package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserDTO;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

	@Mapping(source = "rol.nombreRol", target = "rol")
	public UserDTO toUsuarioDTO(User usuario);
	
	@Mapping(target = "authorities", ignore = true)
	public User toUsuario(UserDTO usuarioDTO);
	
}
