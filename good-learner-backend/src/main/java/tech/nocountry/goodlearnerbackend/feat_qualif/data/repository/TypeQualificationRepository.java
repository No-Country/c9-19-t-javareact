package tech.nocountry.goodlearnerbackend.feat_qualif.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.entities.TypeQualification;

@Repository
public interface TypeQualificationRepository extends JpaRepository<TypeQualification, Long> {
}
