package tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class TeacherSubjectRequest {
    @NotNull
    private Long idCommissionSubject;

    @NotNull
    private Long idTeacher;
}
