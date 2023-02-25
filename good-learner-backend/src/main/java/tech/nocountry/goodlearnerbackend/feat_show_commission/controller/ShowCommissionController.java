package tech.nocountry.goodlearnerbackend.feat_show_commission.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service.ICommissionService;

import java.util.List;

import static org.springframework.http.ResponseEntity.noContent;

@Controller
@RequestMapping("api")
public class ShowCommissionController {
    @Autowired
    private ICommissionService commissionService;

    @GetMapping("/commissions")
    public ResponseEntity<List<CommissionDTO>> showCommissions() {
        List<CommissionDTO> commissionDTOList = commissionService.getAllCommissions();
        if (commissionDTOList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(commissionDTOList);
        }
    }

}
