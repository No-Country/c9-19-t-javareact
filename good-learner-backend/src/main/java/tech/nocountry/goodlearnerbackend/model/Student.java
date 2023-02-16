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

    //@Column(name = "alias")
    //private String alias;

    @Column(name = "is_regular")
    private Boolean isRegular;

    public Student(
            String firstName,
            String lastName,
            String document,
            LocalDate birthDate,
            String email,
            LocalDateTime timeStamp,
            String phone,
            Boolean isRegular
    ){
        super(firstName, lastName, document, birthDate, email, timeStamp, phone);
        this.isRegular = isRegular;
    }

}