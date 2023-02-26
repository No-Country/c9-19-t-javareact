package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.model.Tutor;
import tech.nocountry.goodlearnerbackend.model.TutorStudent;

import java.util.List;

@Repository
public interface TutorStudentRepository extends JpaRepository<TutorStudent, Long> {

    @Query(value = "SELECT ts FROM TutorStudent ts WHERE ts.student = :student and ts.tutor = :tutor")
    public List<TutorStudent> findRelationByTutorAndStudent(Student student, Tutor tutor);

    @Query(value = "SELECT ts FROM TutorStudent ts WHERE ts.student = :student")
    public List<TutorStudent> findRelationByStudent(Student student);

    @Query(value = "SELECT ts FROM TutorStudent ts WHERE ts.tutor = :tutor")
    public List<TutorStudent> findRelationByTutor(Tutor tutor);
}
