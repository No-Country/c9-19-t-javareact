package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "qualification")
public class Qualification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_qualification", nullable = false, unique = true)
    private Long idQualification;


    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "commission_subject_id", nullable = false)
    private CommissionSubject commissionSubject;

    @ManyToOne
    @JoinColumn(name = "period_id", nullable = false)
    private Period period;

    @ManyToOne
    @JoinColumn(name = "type_qualification", nullable = false)
    private TypeQualification typeQualification;

    @Column(name = "numerical_qualification")
    private Integer numericalNote;

    @ManyToOne
    @JoinColumn(name = "scale_qualification")
    private ScaleQualification scaleQualification;



}
