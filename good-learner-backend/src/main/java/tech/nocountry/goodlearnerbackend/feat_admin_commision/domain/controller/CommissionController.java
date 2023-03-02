package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request.CommissionRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request.CommissionUpdateRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.service.ICommissionService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/admin")
public class CommissionController {

    @Autowired
    private ICommissionService iCommissionService;

    @GetMapping("/commission/{idCommission}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findCommissionById(@PathVariable Long idCommission){
        try{
            return iCommissionService.findCommissionById(idCommission);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/commission")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> createdCommission(@Validated @RequestBody CommissionRequest commissionRequest, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>("Los campos Curso, Division, año, y turno son Obligatorios", HttpStatus.BAD_REQUEST);
        }
        try {
            return iCommissionService.createCommission(commissionRequest);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/commission")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updateCommission(@Validated @RequestBody CommissionUpdateRequest commissionRequest, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>("Los campos Curso, Division, año, y turno son Obligatorios", HttpStatus.BAD_REQUEST);
        }
        try {
            return iCommissionService.updateCommission(commissionRequest);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
