package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Usuario;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

	@Mapping(source = "rol.nombreRol", target = "rol")
	public UsuarioDTO toUsuarioDTO(Usuario usuario);
	
	@Mapping(target = "authorities", ignore = true)
	public Usuario toUsuario(UsuarioDTO usuarioDTO);
	
}
