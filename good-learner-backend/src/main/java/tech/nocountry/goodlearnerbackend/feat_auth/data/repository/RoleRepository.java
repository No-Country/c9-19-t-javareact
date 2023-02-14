package tech.nocountry.goodlearnerbackend.feat_auth.data.repository;

import org.springframework.data.repository.CrudRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Role;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;

import java.util.Optional;


public interface RoleRepository extends CrudRepository<Role, Long> {
	Optional<Role> findByNombreRol(RoleName nombreRol);
}
