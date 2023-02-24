package tech.nocountry.goodlearnerbackend.feat_admin_dashboard.data.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Person;

@Repository
public interface PersonPageRepository extends PagingAndSortingRepository<Person, Long> {
    @Query(value = "SELECT COUNT(*) FROM Person", nativeQuery = true)
    public Long countPerson();
}
