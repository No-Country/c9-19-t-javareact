package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionSubjectDTO;
import tech.nocountry.goodlearnerbackend.model.Commission;
import java.util.List;

@Service
@Transactional
public interface IShowCommissionService {
    List<CommissionDTO> getAllCommissions();

    List<CommissionSubjectDTO> getCommissionSubjectsById(Commission commission);

    CommissionDTO getCommissionById(Long id);

    CommissionDTO saveCommission(CommissionDTO commissionDTO);

    void deleteCommissionById(Long id);

}
