package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;
//import tech.nocountry.goodlearnerbackend.model.Person;

import java.io.Serializable;

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

    @Column(name = "grade", nullable = false)
    private String grade;

    /*@OneToMany(fetch = FetchType.LAZY, mappedBy = "Student")
    private Student student;*/

}