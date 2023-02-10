/*package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "person")
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_person", nullable = false)
    private Long id;

    //@NotEmpty
    @Column(name = "first_name", nullable = false)
    private String firstName;

    //@NotEmpty
    @Column(name = "last_name", nullable = false)
    private String lastName;

    //@NotEmpty
    @Column(name = "document", nullable = false)
    private String document;

    //@NotEmpty
    @Column(name = "birth_date", nullable = false)
    private Date birthDate;

    //@NotEmpty
    //@Email
    @Column(name = "email", nullable = false)
    private String email;

    //@NotEmpty
    @Column(name = "time_stamp", nullable = false)
    @CreationTimestamp
    private LocalDateTime timeStamp;

    //@NotEmpty
    @Column(name = "phone", nullable = false)
    private String phone;


    public static final long serialVersionUID=1L;
}*/