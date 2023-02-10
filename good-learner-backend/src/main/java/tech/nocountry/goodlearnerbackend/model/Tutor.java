package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@PrimaryKeyJoinColumn(name="person_id")
public class Tutor extends Person implements Serializable {

    /*@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;*/

    /*@Temporal(TemporalType.DATE)
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;*/

    @Column(name = "relationship", nullable = false)
    private String relationship;


    /*@OneToMany(fetch = FetchType.LAZY, mappedBy = "")
    private List<Person> tutors;*/

    public Tutor(
            String firstName,
            String lastName,
            String document,
            LocalDate birthDate,
            String email,
            LocalDateTime timeStamp,
            String phone,
            String relationship
    ){
        super(firstName, lastName, document, birthDate, email, timeStamp, phone);
        this.relationship = relationship;
    }

}

