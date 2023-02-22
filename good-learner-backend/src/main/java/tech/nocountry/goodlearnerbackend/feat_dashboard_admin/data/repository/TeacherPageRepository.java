package tech.nocountry.goodlearnerbackend.feat_dashboard_admin.data.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Teacher;

@Repository
public interface TeacherPageRepository extends PagingAndSortingRepository<Teacher, Long> {

    @Query(value = "SELECT COUNT(*) FROM Teacher", nativeQuery = true)
    public Long countTeacher();
}
