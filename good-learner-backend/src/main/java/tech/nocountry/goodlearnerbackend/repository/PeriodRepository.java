package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Period;
import tech.nocountry.goodlearnerbackend.model.PeriodName;

import java.util.Optional;

@Repository
public interface PeriodRepository extends JpaRepository<Period, Long> {

    @Query("SELECT p FROM Period p WHERE p.periodName = :periodName")
    public Optional<Period> findByPeriodName(PeriodName periodName);
}
