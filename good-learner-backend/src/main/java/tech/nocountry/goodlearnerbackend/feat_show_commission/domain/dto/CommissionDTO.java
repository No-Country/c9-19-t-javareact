package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto;
import java.util.List;
import lombok.*;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.model.Shift;
import tech.nocountry.goodlearnerbackend.model.ShiftName;
import tech.nocountry.goodlearnerbackend.model.Subject;

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
    private List<CommissionSubjectDTO> subjects;
    private List<PersonDetailDTO> students;


    public CommissionDTO() {}

    public CommissionDTO(Long commissionId, List<CommissionSubjectDTO> subjects, List<PersonDetailDTO> students, String course, String division, int schoolYear, ShiftName shiftName) {
        this.commissionId = commissionId;
        this.subjects = subjects;
        this.students = students;
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
