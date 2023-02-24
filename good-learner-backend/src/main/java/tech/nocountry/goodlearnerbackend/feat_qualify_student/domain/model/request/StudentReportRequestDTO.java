package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class StudentReportRequestDTO {
    @NotNull
    private Long idStudent;
    @NotNull
    private Integer schoolYear;
}
