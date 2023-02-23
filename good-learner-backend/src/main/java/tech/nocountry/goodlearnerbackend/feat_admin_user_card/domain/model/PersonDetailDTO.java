package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model;


import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;

import java.time.LocalDate;

@RequiredArgsConstructor
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
    private Long idUser;
    private String username;
    private RoleName roleName;

    public PersonDetailDTO(Long idPerson, String firstName, String lastName, String document, LocalDate birthDate, String email, String phone, Long idUser, String username, RoleName roleName) {
        this.idPerson = idPerson;
        this.firstName = firstName;
        this.lastName = lastName;
        this.document = document;
        this.birthDate = birthDate;
        this.email = email;
        this.phone = phone;
        this.idUser = idUser;
        this.username = username;
        this.roleName = roleName;
    }

    public PersonDetailDTO(Long idPerson, String firstName, String lastName, LocalDate birthDate, String email, String phone){
        this.idPerson  = idPerson;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.phone = phone;
    }
}
