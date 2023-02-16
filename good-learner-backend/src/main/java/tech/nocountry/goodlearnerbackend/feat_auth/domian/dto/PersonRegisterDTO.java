package tech.nocountry.goodlearnerbackend.feat_auth.domian.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;

import java.time.LocalDate;

@Data
public class PersonRegisterDTO {

    private Long id;
    @NotNull
    @NotBlank
    private String firstName;
    @NotNull
    @NotBlank
    private String lastName;

    private LocalDate birthDate;
    @NotNull
    @NotBlank
    private String document;

    private String email;

    private String phone;

    private RoleName roleName;

    public PersonRegisterDTO(String firstName, String lastName, String document, String email, String phone, RoleName roleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.document = document;
        this.email = email;
        this.phone = phone;
        this.roleName = roleName;
    }
}
