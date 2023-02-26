package tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.model.request.InscriptionRequest;

public interface IInscriptionService {

    public ResponseEntity<?> createdInscriptionFromStudent(InscriptionRequest inscriptionRequest);
}
