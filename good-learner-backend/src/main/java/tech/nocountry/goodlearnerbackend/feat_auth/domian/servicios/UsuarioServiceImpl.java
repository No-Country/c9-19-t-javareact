package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Role;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserLoginDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.mapper.UsuarioMapper;
import tech.nocountry.goodlearnerbackend.feat_auth.jwt.JwtProvider;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.RoleRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;


@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UserRepository usuarioRepository;

	@Autowired
	private UsuarioMapper usuarioMapper;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
    private RoleRepository rolRepository;

	@Override
	public UserDTO crear(UserDTO usuarioDTO) throws Exception  {

		User usuario = usuarioMapper.toUsuario(usuarioDTO);
		usuario.setClave(passwordEncoder.encode(usuarioDTO.getClave()));
		Role rol = rolRepository.findByNombreRol(usuarioDTO.getRol()).orElseThrow(()-> new Exception("No existe el rol en la base de datos, inserte primero"));
		usuario.setRol(rol);
		usuario = usuarioRepository.save(usuario);
		return usuarioMapper.toUsuarioDTO(usuario);
		
	}


	@Override
	public UserDTO login(UserLoginDTO usuarioLoginDTO) {
		Authentication auth = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(usuarioLoginDTO.getNombreUsuario(), usuarioLoginDTO.getClave()));
		SecurityContextHolder.getContext().setAuthentication(auth);

		String token = JwtProvider.generarTokenJWT(usuarioLoginDTO.getNombreUsuario());

		User usuario = usuarioRepository.buscarPorNombreUsuario(usuarioLoginDTO.getNombreUsuario()).orElse(null);
		
		UserDTO usuarioDTO = usuarioMapper.toUsuarioDTO(usuario);

		usuarioDTO.setToken(token);
		return usuarioDTO;
	}	

}
