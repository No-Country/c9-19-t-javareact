package tech.nocountry.goodlearnerbackend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class PersonDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String document;
    private LocalDate birthDate;
    private String email;
    private LocalDateTime timeStamp;
    private String phone;

    public PersonDTO(Long id){
        this.id = id;
    }
    public PersonDTO(
            String firstName,
            String lastName,
            String document,
            LocalDate birthDate,
            String email,
            LocalDateTime timeStamp,
            String phone
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.document = document;
        this.birthDate = birthDate;
        this.email = email;
        this.timeStamp = timeStamp;
        this.phone = phone;
    }
}
