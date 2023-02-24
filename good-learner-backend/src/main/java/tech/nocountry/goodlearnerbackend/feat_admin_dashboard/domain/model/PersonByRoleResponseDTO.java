package tech.nocountry.goodlearnerbackend.feat_admin_dashboard.domain.model;

import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;


@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PersonByRoleResponseDTO {
    private Long id;
    private String fullName;
    private RoleName roleName;
}