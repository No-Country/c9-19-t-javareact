package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.nocountry.goodlearnerbackend.model.Tutor;

public interface TutorRepository extends JpaRepository<Tutor, Long> {

}
