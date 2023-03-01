package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.*;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommissionSubjectRepository extends JpaRepository<CommissionSubject, Long> {
    @Query("SELECT c FROM CommissionSubject c WHERE c.commissionId = :commission")
    public List<CommissionSubject> findByCommissionId(Commission commission);

    @Query("SELECT i FROM CommissionSubject i WHERE i.teacher = :teacher and i.commission = :commission and i.subject = :subject")
    List<CommissionSubject> findAllByIdTeacherAndCommission(Teacher teacher, Commission commission, Subject subject);
}
