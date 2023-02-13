package tech.nocountry.goodlearnerbackend.feat_auth.data.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Usuario;

import java.util.Optional;



public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

	@Query("SELECT u FROM Usuario u LEFT JOIN FETCH u.rol r WHERE u.nombreUsuario = :nombreUsuario")
	public Optional<Usuario> buscarPorNombreUsuario(String nombreUsuario);
	
}
