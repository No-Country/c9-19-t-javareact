package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.TutorStudent;

@Repository
public interface TutorStudentRepository extends JpaRepository<TutorStudent, Long> {
}
