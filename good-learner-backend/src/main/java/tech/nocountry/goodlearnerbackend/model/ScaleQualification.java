package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "scale_qualification")
public class ScaleQualification implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_scale_qualification", nullable = false, unique = true)
    private Long idScaleQualification;

    @Column(name = "scale_qualification_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private ScaleQualificationName scaleQualificationName;

}
