package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Commission;
import tech.nocountry.goodlearnerbackend.model.Inscription;
import tech.nocountry.goodlearnerbackend.model.Student;

import java.util.List;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Long> {

    @Query("SELECT i FROM Inscription i WHERE i.commission = :commission")
    public List<Inscription> findAllByIdCommission(Commission commission);
    @Query("SELECT i FROM Inscription i WHERE i.student = :student and i.commission = :commission")
    public List<Inscription> findAllByIdStudentAndCommission(Student student, Commission commission);

}
