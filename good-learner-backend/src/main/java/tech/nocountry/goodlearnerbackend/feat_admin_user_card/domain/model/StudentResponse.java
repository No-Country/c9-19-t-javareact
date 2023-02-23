package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model;

import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class StudentResponse {

    private String fullName;
    private String dni;
    private RoleName roleName;
    private Boolean isRegular;
}
