package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.*;

import java.util.List;

@Repository
public interface DayRepository extends JpaRepository<Day, Long> {
    @Query("SELECT d FROM Day d WHERE d.dayName = :dayName")
    public List<Day> findAllByName(DayName dayName);
}
