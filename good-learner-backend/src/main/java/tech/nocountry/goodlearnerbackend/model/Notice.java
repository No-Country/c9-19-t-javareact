package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "notice")
public class Notice implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_notice",  nullable = false, unique = true)
    private Long idNotice;

    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "publication_date", nullable = false)
    private LocalDate publicationDate;

    @Column(name = "is_available", nullable = false)
    private Boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "commission_subject_id", nullable = false)
    private CommissionSubject commissionSubject;
}
