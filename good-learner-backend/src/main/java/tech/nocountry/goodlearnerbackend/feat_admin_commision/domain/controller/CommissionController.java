package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.service.ICommissionService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/admin")
public class CommissionController {

    @Autowired
    private ICommissionService iCommissionService;

    @GetMapping("/commission/{idCommission}")
    public ResponseEntity<?> findCommissionById(@PathVariable Long idCommission){
        try{
            return iCommissionService.findCommissionById(idCommission);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
