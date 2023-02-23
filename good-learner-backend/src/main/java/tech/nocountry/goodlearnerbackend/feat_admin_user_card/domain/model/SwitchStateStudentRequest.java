package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model;

import lombok.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class SwitchStateStudentRequest {
    private Long id;
    private Boolean state;
}
