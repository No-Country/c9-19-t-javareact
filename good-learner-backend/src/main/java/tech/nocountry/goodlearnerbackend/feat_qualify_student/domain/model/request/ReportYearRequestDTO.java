package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ReportYearRequestDTO {

    @NotNull
    private Integer year;
}
