package tech.nocountry.goodlearnerbackend.feat_show_commission.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service.ICommissionService;

import java.util.List;

@Controller
public class ShowCommissionController {
    @Autowired
    private ICommissionService commissionService;

    @GetMapping("/commissions")
    public ResponseEntity<List<CommissionDTO>> showCommissions() {
        List<CommissionDTO> commissionDTOList = commissionService.getAllCommissions();
        return ResponseEntity.ok(commissionDTOList);
    }

}
