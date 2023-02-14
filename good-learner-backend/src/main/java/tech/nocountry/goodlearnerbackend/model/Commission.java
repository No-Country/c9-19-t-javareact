package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "commission")
public class Commission implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_commission", nullable = false, unique = true)
    private Long commissionId;

    @Column(name = "course", nullable = false)
    private String course;

    @Column(name = "division", nullable = false)
    private String division;

    @Column(name = "school_year", nullable = false)
    private int schoolYear;

    @ManyToOne
    @JoinColumn(name = "shift_id", nullable = false)
    private Shift shift;

    public Commission(String course, String division, int schoolYear, Shift shift){
        this.course = course;
        this.division = division;
        this.schoolYear = schoolYear;
        this.shift = shift;
    }


}