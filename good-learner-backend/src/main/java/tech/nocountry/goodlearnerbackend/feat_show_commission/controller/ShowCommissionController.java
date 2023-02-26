package tech.nocountry.goodlearnerbackend.feat_show_commission.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionSubjectDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service.ICommissionService;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper.CommissionMapper;

import java.util.List;

@Controller
@RequestMapping("api")
public class ShowCommissionController {
    @Autowired
    private ICommissionService commissionService;

    @Autowired
    private CommissionMapper commissionMapper;

    @GetMapping("/commissions")
    public ResponseEntity<List<CommissionDTO>> showCommissions() {
        List<CommissionDTO> commissionDTOList = commissionService.getAllCommissions();
        if (commissionDTOList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            for(int i = 0; i < commissionDTOList.size(); i ++){
                CommissionDTO commission = commissionDTOList.get(i);
                List<CommissionSubjectDTO> CommissionsSubject = commissionService.getCommissionSubjectsById(commissionMapper.commissionDTOToCommission(commission));
                commission.setSubjects(CommissionsSubject);
            }
            return ResponseEntity.ok(commissionDTOList);
        }
    }

}
