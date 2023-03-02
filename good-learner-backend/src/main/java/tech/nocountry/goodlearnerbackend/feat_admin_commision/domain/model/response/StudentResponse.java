package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.response;

import lombok.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class StudentResponse {

    private Long idInscription;
    private Long id;
    private String firstName;
    private String lastName;

    private String document;
    private Boolean isRegular;

}
