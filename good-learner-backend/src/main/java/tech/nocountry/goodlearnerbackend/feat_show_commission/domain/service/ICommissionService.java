package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;

import java.util.List;

@Service
@Transactional
public interface ICommissionService {
    List<CommissionDTO> getAllCommissions();

    CommissionDTO getCommissionById(Long id);

    CommissionDTO saveCommission(CommissionDTO commissionDTO);

    void deleteCommissionById(Long id);

}
