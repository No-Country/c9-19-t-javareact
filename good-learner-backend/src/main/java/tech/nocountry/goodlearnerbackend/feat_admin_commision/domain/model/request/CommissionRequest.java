package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import tech.nocountry.goodlearnerbackend.model.ShiftName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CommissionRequest {
    @NotNull
    private String course;
    @NotNull
    private String division;
    @NotNull
    private Integer year;
    @NotNull
    private ShiftName shiftName;
}
