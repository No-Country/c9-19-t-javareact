package tech.nocountry.goodlearnerbackend.domain;

import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class TutorDTO extends PersonDTO {
    private String relationship;

    public TutorDTO(){
        super();
    }

    public TutorDTO(
            String firstName,
            String lastName,
            String document,
            LocalDate birthDate,
            String email,
            LocalDateTime timeStamp,
            String phone,
            String relationship
    )
    {
        super(firstName, lastName, document, birthDate, email, timeStamp, phone);
        this.relationship = relationship;
    }
}
