package tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.model;

import lombok.*;


@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PersonResponseDTO {
    private Long id;
    private String fullName;
}