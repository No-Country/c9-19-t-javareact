package tech.nocountry.goodlearnerbackend.feat_auth.servicios;

import tech.nocountry.goodlearnerbackend.feat_auth.dto.UsuarioDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.dto.UsuarioLoginDTO;

public interface UsuarioService  {
	public UsuarioDTO login(UsuarioLoginDTO usuarioLoginDTO);

	public UsuarioDTO crear(UsuarioDTO usuarioDTO) throws Exception;

	
}
