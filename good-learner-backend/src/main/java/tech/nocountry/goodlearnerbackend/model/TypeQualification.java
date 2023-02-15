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
@Table(name = "type_qualification")
public class TypeQualification implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_type_qualification", nullable = false)
    private Long idTypeQualification;

    @Column(name = "type_qualification_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeQualificationName typeQualificationName;

    public TypeQualification(TypeQualificationName typeQualificationName){
        this.typeQualificationName = typeQualificationName;
    }
}
