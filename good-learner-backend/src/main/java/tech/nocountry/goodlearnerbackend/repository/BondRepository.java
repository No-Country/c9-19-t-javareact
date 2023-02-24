package tech.nocountry.goodlearnerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.goodlearnerbackend.model.Bond;
import tech.nocountry.goodlearnerbackend.model.BondName;

import java.util.Optional;

@Repository
public interface BondRepository extends JpaRepository<Bond, Long> {
    @Query("SELECT b FROM Bond b WHERE b.bondName = :bondName")
    Optional<Bond> findBondByName(BondName bondName);
}
