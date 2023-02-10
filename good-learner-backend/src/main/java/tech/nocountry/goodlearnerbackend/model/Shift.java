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
public class Shift implements Serializable {

    @Id
    @Column(name = "id_shift")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "shift_name")
    //@Enumerated(EnumType.STRING)
    private String shiftName;
}
