package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import tech.nocountry.goodlearnerbackend.model.BondName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class RelationStudentTutorRequest {
    @NotNull
    private Long idStudent;
    @NotNull
    private Long idTutor;
    @NotNull
    private BondName relation;
}
