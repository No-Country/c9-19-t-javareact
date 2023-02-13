package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios;

import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioLoginDTO;

public interface UsuarioService  {
	public UsuarioDTO login(UsuarioLoginDTO usuarioLoginDTO);

	public UsuarioDTO crear(UsuarioDTO usuarioDTO) throws Exception;

	
}
