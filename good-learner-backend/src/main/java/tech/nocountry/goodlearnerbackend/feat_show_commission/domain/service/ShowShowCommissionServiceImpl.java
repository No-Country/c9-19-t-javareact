package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionSubjectDTO;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper.CommissionMapper;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper.CommissionSubjectMapper;
import tech.nocountry.goodlearnerbackend.model.Commission;
import tech.nocountry.goodlearnerbackend.model.CommissionSubject;
import tech.nocountry.goodlearnerbackend.repository.CommissionRepository;
import tech.nocountry.goodlearnerbackend.repository.CommissionSubjectRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ShowShowCommissionServiceImpl implements IShowCommissionService {

    @Autowired
    private CommissionRepository commissionRepository;

    @Autowired
    private CommissionSubjectRepository CommissionSubjectRepository;

    @Autowired
    private CommissionMapper commissionMapper;

    @Autowired
    private CommissionSubjectMapper commissionSubjectMapper;

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
    public List<CommissionSubjectDTO> getCommissionSubjectsById(Commission commission) {
        List<CommissionSubject> optionalCommissionSubject = CommissionSubjectRepository.findByCommissionId(commission);
        return optionalCommissionSubject.stream().map(commissionSubjectMapper::commissionSubjectToCommissionSubjectDTO).collect(Collectors.toList());
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
