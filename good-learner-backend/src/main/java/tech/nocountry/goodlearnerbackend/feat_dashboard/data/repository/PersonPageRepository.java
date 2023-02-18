package tech.nocountry.goodlearnerbackend.feat_dashboard.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Person;

@Repository
public interface PersonPageRepository extends PagingAndSortingRepository<Person, Long> {
}
