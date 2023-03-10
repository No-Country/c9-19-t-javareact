package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "subject")
public class Subject implements Serializable {
    @Id
    @Column(name = "id_subject", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subjectId;

    @Column(name = "subject_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private SubjectName subjectName;

    public Subject(SubjectName subjectName){
        this.subjectName = subjectName;
    }
}
