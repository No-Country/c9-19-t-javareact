package tech.nocountry.goodlearnerbackend.feat_user_card.domain.model;


import lombok.*;

import java.time.LocalDate;

@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
@ToString
public class PersonDetailDTO {
    private Long idPerson;
    private String firstName;
    private String lastName;
    private String document;
    private LocalDate birthDate;
    private String email;
    private String phone;
}
