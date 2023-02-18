package tech.nocountry.goodlearnerbackend.feat_user_card.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import tech.nocountry.goodlearnerbackend.model.Student;

public interface StudentPageRepository extends PagingAndSortingRepository<Student, Long> {
}
