package tech.nocountry.goodlearnerbackend.domain.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.domain.model.request.InscriptionRequest;
import tech.nocountry.goodlearnerbackend.domain.model.request.InscriptionUpdateRequest;

public interface IInscriptionService {

    public ResponseEntity<?> createdInscriptionFromStudent(InscriptionRequest inscriptionRequest);
    public ResponseEntity<?> deleteInscriptionById(Long idInscription);
    public ResponseEntity<?> findInscriptionById(Long idInscription);
    public ResponseEntity<?> updateInscriptionById(InscriptionUpdateRequest inscriptionRequest);
}
