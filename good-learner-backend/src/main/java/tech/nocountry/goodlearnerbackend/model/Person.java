package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "person")
@Inheritance(strategy=InheritanceType.JOINED)
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_person", nullable = false, unique = true)
    private Long idPerson;

    //@NotEmpty
    @Column(name = "first_name", nullable = false)
    private String firstName;

    //@NotEmpty
    @Column(name = "last_name", nullable = false)
    private String lastName;

    //@NotEmpty
    @Column(name = "document", nullable = false, unique = true)
    private String document;

    //@NotEmpty
    @Column(name = "birth_date", nullable = false)
    private LocalDate birthDate;

    //@NotEmpty
    //@Email
    @Column(name = "email")
    private String email;

    //@NotEmpty
    @Column(name = "time_stamp", nullable = false)
    @CreationTimestamp
    private LocalDateTime timeStamp;

    //@NotEmpty
    @Column(name = "phone")
    private String phone;

    public Person(
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

    public static final long serialVersionUID=1L;
}