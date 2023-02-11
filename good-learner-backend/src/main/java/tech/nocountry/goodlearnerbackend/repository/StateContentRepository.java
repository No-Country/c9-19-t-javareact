package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.StateContent;

@Repository
public interface StateContentRepository extends JpaRepository<StateContent, Long> {
}
