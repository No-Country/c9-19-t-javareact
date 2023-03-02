package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionSubjectDTO;
import tech.nocountry.goodlearnerbackend.model.CommissionSubject;

@Component
public class CommissionSubjectMapper {
    public CommissionSubjectDTO commissionSubjectToCommissionSubjectDTO(CommissionSubject commissionSubject) {
        CommissionSubjectDTO commissionSubjectDTO = new CommissionSubjectDTO();
        commissionSubjectDTO.setIdCommissionSubject(commissionSubject.getIdCommissionSubject());
        commissionSubjectDTO.setSubject(commissionSubject.getSubjectId());
        commissionSubjectDTO.setTeacher(commissionSubject.getTeacherId());
        return commissionSubjectDTO;

    }

    public CommissionSubject commissionSubjectDTOToCommissionSubject(CommissionSubjectDTO commissionSubjectDTO) {
        CommissionSubject commissionSubject = new CommissionSubject();
        commissionSubject.setIdCommissionSubject(commissionSubjectDTO.getIdCommissionSubject());
        commissionSubject.setSubjectId(commissionSubjectDTO.getSubject());
        commissionSubject.setTeacherId(commissionSubjectDTO.getTeacher());
        return commissionSubject;
    }
}
