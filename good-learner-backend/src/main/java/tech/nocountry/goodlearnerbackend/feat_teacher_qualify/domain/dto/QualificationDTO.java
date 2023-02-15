package tech.nocountry.goodlearnerbackend.feat_teacher_qualify.domain.dto;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.ScaleQualification;
import tech.nocountry.goodlearnerbackend.model.ScaleQualificationName;
import tech.nocountry.goodlearnerbackend.model.TypeQualificationName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class QualificationDTO {
    private String periodo;
    private TypeQualificationName typeQualificationName;
    private ScaleQualificationName scaleQualificationName;
    private Integer numberQualification;

    public QualificationDTO(String periodo, TypeQualificationName typeQualificationName, Integer numberQualification){
        this.periodo = periodo;
        this.typeQualificationName = typeQualificationName;
        this.numberQualification = numberQualification;
    }

    public QualificationDTO(String periodo, TypeQualificationName typeQualificationName, ScaleQualificationName scaleQualificationName){
        this.periodo = periodo;
        this.typeQualificationName = typeQualificationName;
        this.scaleQualificationName = scaleQualificationName;
    }
}
