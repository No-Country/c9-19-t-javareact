package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper.CommissionMapper;
import tech.nocountry.goodlearnerbackend.model.Commission;
import tech.nocountry.goodlearnerbackend.repository.CommissionRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommissionServiceImpl implements ICommissionService{

    @Autowired
    private CommissionRepository commissionRepository;

    @Autowired
    private CommissionMapper commissionMapper;

    @Override
    public List<CommissionDTO> getAllCommissions() {
        List<Commission> commissions = commissionRepository.findAll();
        return commissions.stream().map(commissionMapper::commissionToCommissionDTO).collect(Collectors.toList());
    }

    @Override
    public CommissionDTO getCommissionById(Long id) {
        Optional<Commission> optionalCommission = commissionRepository.findById(id);
        if (optionalCommission.isPresent()) {
            Commission commission = optionalCommission.get();
            return commissionMapper.commissionToCommissionDTO(commission);
        } else {
            throw new RuntimeException("Commission not found for id :: " + id);
        }
    }

    @Override
    public CommissionDTO saveCommission(CommissionDTO commissionDTO) {
        Commission commission = commissionMapper.commissionDTOToCommission(commissionDTO);
        Commission savedCommission = commissionRepository.save(commission);
        return commissionMapper.commissionToCommissionDTO(savedCommission);
    }

    @Override
    public void deleteCommissionById(Long id) {
        commissionRepository.deleteById(id);
    }
}
