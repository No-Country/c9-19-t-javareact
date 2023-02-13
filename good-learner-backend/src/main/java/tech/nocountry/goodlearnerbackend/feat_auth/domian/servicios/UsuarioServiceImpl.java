package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioLoginDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.mapper.UsuarioMapper;
import tech.nocountry.goodlearnerbackend.feat_auth.jwt.JwtProvider;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Rol;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Usuario;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.RolRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UsuarioRepository;


@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private UsuarioMapper usuarioMapper;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
    private RolRepository rolRepository;

	@Override
	public UsuarioDTO crear(UsuarioDTO usuarioDTO) throws Exception  {

		Usuario usuario = usuarioMapper.toUsuario(usuarioDTO);
		usuario.setClave(passwordEncoder.encode(usuarioDTO.getClave()));
		Rol rol = rolRepository.findByNombreRol(usuarioDTO.getRol()).orElseThrow(()-> new Exception("No existe el rol en la base de datos, inserte primero"));
		usuario.setRol(rol);
		usuario = usuarioRepository.save(usuario);
		return usuarioMapper.toUsuarioDTO(usuario);
		
	}


	@Override
	public UsuarioDTO login(UsuarioLoginDTO usuarioLoginDTO) {
		Authentication auth = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(usuarioLoginDTO.getNombreUsuario(), usuarioLoginDTO.getClave()));
		SecurityContextHolder.getContext().setAuthentication(auth);

		String token = JwtProvider.generarTokenJWT(usuarioLoginDTO.getNombreUsuario());

		Usuario usuario = usuarioRepository.buscarPorNombreUsuario(usuarioLoginDTO.getNombreUsuario()).orElse(null);
		
		UsuarioDTO usuarioDTO = usuarioMapper.toUsuarioDTO(usuario);

		usuarioDTO.setToken(token);
		return usuarioDTO;
	}	

}
