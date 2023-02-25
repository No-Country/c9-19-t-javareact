package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.model.Commission;

//@Mapper
@Component
public class CommissionMapper {
    //CommissionMapper INSTANCE = Mappers.getMapper( CommissionMapper.class );

    public CommissionDTO commissionToCommissionDTO(Commission commission) {
        CommissionDTO commissionDTO = new CommissionDTO();
        commissionDTO.setCommissionId(commission.getCommissionId());
        commissionDTO.setCourse(commission.getCourse());
        commissionDTO.setDivision(commission.getDivision());
        commissionDTO.setSchoolYear(commission.getSchoolYear());
        commissionDTO.setShiftName(commission.getShift().getShiftName());
        return commissionDTO;

    }

    public Commission commissionDTOToCommission(CommissionDTO commissionDTO) {
        Commission commission = new Commission();
        commission.setCommissionId(commissionDTO.getCommissionId());
        commission.setCourse(commissionDTO.getCourse());
        commission.setDivision(commissionDTO.getDivision());
        commission.setSchoolYear(commissionDTO.getSchoolYear());
        commission.setShift(commissionDTO.getShift());
        return commission;
    }
}
