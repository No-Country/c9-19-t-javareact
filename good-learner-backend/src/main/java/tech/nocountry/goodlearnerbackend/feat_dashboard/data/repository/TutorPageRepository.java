package tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Tutor;

@Repository
public interface TutorPageRepository extends PagingAndSortingRepository<Tutor, Long> {
}
