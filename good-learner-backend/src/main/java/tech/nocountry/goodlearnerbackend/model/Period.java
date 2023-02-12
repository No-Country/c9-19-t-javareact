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
@Table(name = "period")
public class Period implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_period", nullable = false, unique = true)
    private Long idPeriod;

    @ManyToOne
    @JoinColumn(name = "type_period_id", nullable = false)
    private TypePeriod typePeriod;
}
