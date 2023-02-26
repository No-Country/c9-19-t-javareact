package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request;

import lombok.*;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CommissionRequest {
    private String course;
}
