package tech.nocountry.goodlearnerbackend.feat_qualif.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.entities.ScaleQualification;

@Repository
public interface ScaleQualificationRepository extends JpaRepository<ScaleQualification, Long> {
}
