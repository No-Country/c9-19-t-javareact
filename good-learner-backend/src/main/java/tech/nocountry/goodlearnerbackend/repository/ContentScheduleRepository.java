package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.ContentSchedule;

@Repository
public interface ContentScheduleRepository extends JpaRepository<ContentSchedule, Long> {
}
