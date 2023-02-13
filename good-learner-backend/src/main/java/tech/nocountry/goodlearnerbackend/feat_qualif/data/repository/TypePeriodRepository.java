package tech.nocountry.goodlearnerbackend.feat_qualif.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.entities.TypePeriod;

@Repository
public interface TypePeriodRepository extends JpaRepository<TypePeriod, Long> {
}
