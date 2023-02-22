package tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.model;

import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;
@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class PersonCountDTO {
    private RoleName roleName;
    private Long count;
}
