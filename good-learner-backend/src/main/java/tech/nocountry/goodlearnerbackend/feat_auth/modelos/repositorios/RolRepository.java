package tech.nocountry.goodlearnerbackend.feat_auth.modelos.repositorios;

import org.springframework.data.repository.CrudRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.NombreRol;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.Rol;

import java.util.Optional;


public interface RolRepository extends CrudRepository<Rol, Long> {
	Optional<Rol> findByNombreRol(NombreRol nombreRol);
}
