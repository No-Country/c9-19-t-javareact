package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class ReadRelationRequest {
    @NotNull
    private Long idStudent;
    @NotNull
    private Long idTutor;
}
