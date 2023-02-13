package tech.nocountry.goodlearnerbackend.feat_auth.data.repository;

import org.springframework.data.repository.CrudRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.NombreRol;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Rol;

import java.util.Optional;


public interface RolRepository extends CrudRepository<Rol, Long> {
	Optional<Rol> findByNombreRol(NombreRol nombreRol);
}
