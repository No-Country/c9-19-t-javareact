package tech.nocountry.goodlearnerbackend.feat_auth.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.Usuario;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.repositorios.UsuarioRepository;


@Service
public class DetalleUsuarioImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = usuarioRepository.buscarPorNombreUsuario(username).orElse(null);
		if (usuario == null)
			throw new UsernameNotFoundException("No existe el usuario");
		return usuario;
	}

}
