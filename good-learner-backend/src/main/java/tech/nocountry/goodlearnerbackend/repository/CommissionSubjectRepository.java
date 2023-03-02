package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.CommissionSubject;
import tech.nocountry.goodlearnerbackend.model.Commission;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.model.Teacher;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommissionSubjectRepository extends JpaRepository<CommissionSubject, Long> {
    @Query("SELECT c FROM CommissionSubject c WHERE c.commissionId = :commission")
    public List<CommissionSubject> findByCommissionId(Commission commission);

    @Query("SELECT c FROM CommissionSubject c WHERE c.teacherId = :teacher")
    public List<CommissionSubject> findByTeacherId(Teacher teacher);
}
