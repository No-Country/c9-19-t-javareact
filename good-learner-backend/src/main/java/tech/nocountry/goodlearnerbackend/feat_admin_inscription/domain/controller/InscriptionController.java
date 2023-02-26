package tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.controller;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.model.request.InscriptionRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_inscription.domain.service.IInscriptionService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/admin")
public class InscriptionController {

    @Autowired
    private IInscriptionService iInscriptionService;

    @PostMapping("inscription")
    public ResponseEntity<?> createdInscription(@Validated @RequestBody InscriptionRequest inscriptionRequest, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    "Lo datos fecha de inscripción, ID de la comisión y ID del estudiante son Obligatorios.",
                    HttpStatus.BAD_REQUEST);
        }
        try{
            return iInscriptionService.createdInscriptionFromStudent(inscriptionRequest);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
