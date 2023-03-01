package tech.nocountry.goodlearnerbackend.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class InscriptionUpdateRequest {
    @NotNull
    private Long idInscription;
    @NotNull
    private LocalDate inscriptionDate;
    @NotNull
    private Long idCommission;
    @NotNull
    private Long idStudent;
}