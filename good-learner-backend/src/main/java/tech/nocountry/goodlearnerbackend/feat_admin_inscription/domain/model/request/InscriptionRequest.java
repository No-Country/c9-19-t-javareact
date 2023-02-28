package tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class InscriptionRequest {
    @NotNull
    private LocalDate inscriptionDate;
    @NotNull
    private Long idCommission;
    @NotNull
    private Long idStudent;
}
