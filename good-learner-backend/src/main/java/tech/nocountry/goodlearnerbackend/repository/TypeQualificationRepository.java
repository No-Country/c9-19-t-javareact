package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.TypeQualification;

@Repository
public interface TypeQualificationRepository extends JpaRepository<TypeQualification, Long> {
}
