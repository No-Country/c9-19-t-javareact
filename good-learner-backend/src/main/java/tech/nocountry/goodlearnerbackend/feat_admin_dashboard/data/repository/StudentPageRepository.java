package tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import tech.nocountry.goodlearnerbackend.model.Student;

public interface StudentPageRepository extends PagingAndSortingRepository<Student, Long> {
    @Query(value = "SELECT COUNT(*) FROM Student", nativeQuery = true)
    public Long countStudent();
}
