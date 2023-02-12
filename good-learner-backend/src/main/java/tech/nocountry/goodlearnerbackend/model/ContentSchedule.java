package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "content_schedule")
public class ContentSchedule implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_content_schedule", nullable = false, unique = true)
    private Long idContentSchedule;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "state_content_id", nullable = false)
    private StateContent stateContent;

    @ManyToOne
    @JoinColumn(name = "commission_subject_id", nullable = false)
    private CommissionSubject commissionSubject;
}
