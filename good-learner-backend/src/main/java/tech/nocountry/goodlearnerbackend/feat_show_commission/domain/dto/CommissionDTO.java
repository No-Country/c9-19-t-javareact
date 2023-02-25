package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.Shift;
import tech.nocountry.goodlearnerbackend.model.ShiftName;

@Getter
@Setter
@ToString
public class CommissionDTO {
    private Long commissionId;
    private String course;
    private String division;
    private int schoolYear;
    private ShiftName shiftName;
    private Shift shift;

    public CommissionDTO() {}

    public CommissionDTO(Long commissionId, String course, String division, int schoolYear, ShiftName shiftName) {
        this.commissionId = commissionId;
        this.course = course;
        this.division = division;
        this.schoolYear = schoolYear;
        this.shiftName = shiftName;
    }

    public CommissionDTO(String course, String division, int schoolYear, Shift shift) {
        this.course = course;
        this.division = division;
        this.schoolYear = schoolYear;
        this.shiftName = shiftName;
    }
}
