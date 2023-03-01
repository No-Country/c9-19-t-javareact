package tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.request.AssignationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.service.IAssignationService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/admin")
public class AssignationController {

    @Autowired
    private IAssignationService iAssignationService;

    @PostMapping("/assignation")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> createCommissionAssignation(@Validated @RequestBody AssignationRequest assignationRequest, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    "Lo datos fecha de inscripción, ID de la comisión y ID del estudiante son Obligatorios.",
                    HttpStatus.BAD_REQUEST);
        }
        try{
            return iAssignationService.createCommissionAssignation(assignationRequest);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*@GetMapping("/inscription/{idInscription}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findInscription(@PathVariable Long idInscription){
        try{
            return iAssignationService.findCommissionAssignationById(idAssignation);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/inscription/{idInscription}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> deleteInscription(@PathVariable Long idInscription){
        try{
            return iAssignationService.deleteCommissionAssignationById(idInscription);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/
}
