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
    @Column(name = "id_day", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dayId;

    @Column(name = "day_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private DayName dayName;
}
