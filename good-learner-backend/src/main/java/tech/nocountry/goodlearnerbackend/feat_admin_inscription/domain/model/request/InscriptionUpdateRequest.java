package tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.model.request;

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