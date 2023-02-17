package tech.nocountry.goodlearnerbackend.feat_auth.data.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;

import java.util.Optional;



public interface UserRepository extends CrudRepository<User, Long> {

	@Query("SELECT u FROM User u LEFT JOIN FETCH u.rol r WHERE u.nombreUsuario = :nombreUsuario")
	public Optional<User> buscarPorNombreUsuario(String nombreUsuario);

	@Query(value = "SELECT * FROM User u WHERE u.person = :id", nativeQuery = true)
	public Optional<User> buscarPorIdPerson(Long id);
	
}
