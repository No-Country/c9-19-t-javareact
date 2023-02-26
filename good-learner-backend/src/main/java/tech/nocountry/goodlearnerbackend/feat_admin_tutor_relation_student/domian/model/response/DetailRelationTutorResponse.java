package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.response;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.BondName;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class DetailRelationTutorResponse {
    private Long idRelation;
    private Long idStudent;
    private String fullNameStudent;
    private Long idTutor;
    private String fullNameTutor;
    private BondName relation;
}
