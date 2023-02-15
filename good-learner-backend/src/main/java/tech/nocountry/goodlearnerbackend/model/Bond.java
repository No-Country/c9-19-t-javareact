package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

/**
 * Vínculo entre Estudiante y Tutor.
 * Ej: Padre, Madre, etc.
 */

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "bond")
public class Bond implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_bond", nullable = false, unique = true)
    private Long idBond;

    @Column(name = "bond_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private BondName bondName;

    public Bond(BondName bondName){
        this.bondName = bondName;
    }
}
