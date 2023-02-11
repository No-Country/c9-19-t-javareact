package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.TypePeriod;

@Repository
public interface TypePeriodRepository extends JpaRepository<TypePeriod, Long> {
}
