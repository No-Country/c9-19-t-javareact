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
@Table(name = "student")
public class Student extends Person implements Serializable {
    /*@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_student", nullable = false)
    private Long studentId;*/

    @Column(name = "alias")
    private String alias;

    @Column(name = "is_regular", nullable = false)
    private Boolean isRegular;

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
            String alias,
            Boolean isRegular
    ){
        super(firstName, lastName, document, birthDate, email, timeStamp, phone);
        this.alias = alias;
        this.isRegular = isRegular;
    }

}