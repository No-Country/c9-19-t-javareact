package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class SwitchStateStudentRequest {
    @NotNull
    private Long id;
    @NotNull
    private Boolean state;
}
