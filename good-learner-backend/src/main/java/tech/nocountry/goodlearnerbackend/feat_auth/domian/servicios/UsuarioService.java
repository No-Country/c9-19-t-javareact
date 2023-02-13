package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios;

import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserLoginDTO;

public interface UsuarioService  {
	public UserDTO login(UserLoginDTO usuarioLoginDTO);

	public UserDTO crear(UserDTO usuarioDTO) throws Exception;

	
}
