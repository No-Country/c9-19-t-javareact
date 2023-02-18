package tech.nocountry.goodlearnerbackend.feat_user_card.domain.model;

import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PersonRequestDTO {
    private RoleName roleName;
}