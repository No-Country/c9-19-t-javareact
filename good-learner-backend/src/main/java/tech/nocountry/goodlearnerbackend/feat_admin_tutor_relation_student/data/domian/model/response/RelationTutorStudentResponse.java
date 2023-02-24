package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.response;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.BondName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class RelationTutorStudentResponse {
    private String fullNameStudent;
    private String fullNameTutor;
    private BondName relation;
}
