package tech.nocountry.goodlearnerbackend.feat_admin_count.domain.model;

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
