package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto.CommissionDTO;
import tech.nocountry.goodlearnerbackend.model.Commission;

@Mapper
public class CommissionMapper {
    CommissionMapper INSTANCE = Mappers.getMapper( CommissionMapper.class );

    public CommissionDTO commissionToCommissionDTO(Commission commission) {
        return null;
    }

    public Commission commissionDTOToCommission(CommissionDTO commissionDTO) {
        return null;
    }
}
