package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "teacher")
@PrimaryKeyJoinColumn(name="person_id")
public class Teacher extends Person implements Serializable {

    @Column(name = "title")
    private String title;

    @Column(name = "school_entry_date")
    private LocalDate schoolEntryDate;

    public Teacher(
            String firstName,
            String lastName,
            String document,
            LocalDate birthDate,
            String email,
            LocalDateTime timeStamp,
            String phone,
            String title,
            LocalDate schoolEntryDate
    )
    {
        super(firstName, lastName, document, birthDate, email, timeStamp, phone);
        this.title = title;
        this.schoolEntryDate = schoolEntryDate;
    }

}
