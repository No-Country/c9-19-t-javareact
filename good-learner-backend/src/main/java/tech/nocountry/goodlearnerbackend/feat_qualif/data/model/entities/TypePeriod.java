package tech.nocountry.goodlearnerbackend.feat_qualif.data.model.entities;

import jakarta.persistence.*;
import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.enums.TypePeriodName;

import java.io.Serializable;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "type_period")
public class TypePeriod implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_type_period", nullable = false)
    private Long idTypePeriod;

    @Column(name = "type_period_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private TypePeriodName typePeriodName;
}
