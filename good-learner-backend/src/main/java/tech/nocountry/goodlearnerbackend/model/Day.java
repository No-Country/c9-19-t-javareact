package tech.nocountry.goodlearnerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Day implements Serializable {

    @Id
    @Column(name = "id_day")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dayId;

    @Column(name = "day_name")
    //@Enumerated(EnumType.STRING)
    private String dayName;
}
