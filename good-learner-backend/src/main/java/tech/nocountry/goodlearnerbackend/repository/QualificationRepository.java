package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Qualification;
import tech.nocountry.goodlearnerbackend.model.Student;

import java.util.List;

@Repository
public interface QualificationRepository extends JpaRepository<Qualification, Long> {

    @Query("SELECT q FROM Qualification q WHERE q.student = :student")
    public List<Qualification> findByStudent(Student student);
}
