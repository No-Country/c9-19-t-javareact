package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "state_content")
public class StateContent implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_state_content", nullable = false, unique = true)
    private Long idStateContent;

    @Column(name = "state_content_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private StateContentName stateContentName;

}
