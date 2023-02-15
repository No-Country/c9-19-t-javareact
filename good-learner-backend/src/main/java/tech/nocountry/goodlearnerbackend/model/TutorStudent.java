package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;


@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "tutor_student")
public class TutorStudent implements Serializable {

    @Id
    @Column(name = "id_tutor_student", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTutorStudent;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "tutor_id", nullable = false)
    private Tutor tutor;

    @ManyToOne
    @JoinColumn(name = "bond_id", nullable = false)
    private Bond bond;

    public TutorStudent(Student student, Tutor tutor, Bond bond){
        this.student = student;
        this.tutor = tutor;
        this.bond = bond;
    }

}
