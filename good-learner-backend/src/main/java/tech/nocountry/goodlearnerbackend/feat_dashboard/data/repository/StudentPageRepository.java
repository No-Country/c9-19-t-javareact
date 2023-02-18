package tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import tech.nocountry.goodlearnerbackend.model.Student;

public interface StudentPageRepository extends PagingAndSortingRepository<Student, Long> {
}
