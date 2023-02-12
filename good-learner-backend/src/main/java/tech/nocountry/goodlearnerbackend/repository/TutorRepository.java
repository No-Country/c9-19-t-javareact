package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Tutor;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {

}
