package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;
//import tech.nocountry.goodlearnerbackend.model.Person;

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
public class Student extends Person implements Serializable {
    /*@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_student", nullable = false)
    private Long studentId;*/

    @Column(name = "registration_date", nullable = false)
    private LocalDate registrationDate;

    @ManyToOne
    @JoinColumn(name = "tutor_id", nullable = false)
    private Tutor tutor;

    /*@OneToMany(fetch = FetchType.LAZY, mappedBy = "Student")
    private Student student;*/

    public Student(
            String firstName,
            String lastName,
            String document,
            LocalDate birthDate,
            String email,
            LocalDateTime timeStamp,
            String phone,
            LocalDate registrationDate,
            Tutor tutor
    ){
        super(firstName, lastName, document, birthDate, email, timeStamp, phone);
        this.registrationDate = registrationDate;
        this.tutor = tutor;
    }

}