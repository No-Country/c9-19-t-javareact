package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;
//import tech.nocountry.goodlearnerbackend.model.Person;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Student /*extends Person*/ implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_student", nullable = false)
    private Long studentId;

    @Column(name = "registration_date", nullable = false)
    private LocalDate registrationDate;

    /*@OneToMany(fetch = FetchType.LAZY, mappedBy = "Student")
    private Student student;*/

}