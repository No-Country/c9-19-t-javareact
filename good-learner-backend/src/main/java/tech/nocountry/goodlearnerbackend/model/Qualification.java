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
    @JoinColumn(name = "type_qualification_id", nullable = false)
    private TypeQualification typeQualification;

    @Column(name = "numerical_qualification")
    private Integer numericalNote;

    @ManyToOne
    @JoinColumn(name = "scale_qualification_id")
    private ScaleQualification scaleQualification;

    @Column(name = "message")
    private String message;

    public Qualification(Student student, CommissionSubject commissionSubject, Period period, TypeQualification typeQualification, String message, Integer numericalNote){
        this.student = student;
        this.commissionSubject = commissionSubject;
        this.period = period;
        this.typeQualification = typeQualification;
        this.message = message;
        this.numericalNote = numericalNote;
    }

    public Qualification(Student student, CommissionSubject commissionSubject, Period period, TypeQualification typeQualification, String message, ScaleQualification scaleQualification){
        this.student = student;
        this.commissionSubject = commissionSubject;
        this.period = period;
        this.typeQualification = typeQualification;
        this.message = message;
        this.scaleQualification = scaleQualification;
    }
    public Qualification(Student student, CommissionSubject commissionSubject, Period period, TypeQualification typeQualification, Integer numericalNote){
        this.student = student;
        this.commissionSubject = commissionSubject;
        this.period = period;
        this.typeQualification = typeQualification;
        this.numericalNote = numericalNote;
    }
}
