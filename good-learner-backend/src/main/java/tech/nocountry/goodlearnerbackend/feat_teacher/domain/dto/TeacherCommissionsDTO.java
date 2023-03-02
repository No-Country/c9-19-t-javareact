package tech.nocountry.goodlearnerbackend.feat_teacher.domain.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import tech.nocountry.goodlearnerbackend.feat_teacher.domain.dto.SubjectDTO;
import java.util.List;

@Getter
@Setter
@ToString
public class TeacherCommissionsDTO {
    private Long commissionId;
    private String course;
    private String division;
    private int schoolYear;
    private String shiftName;
    private List<SubjectDTO> subjects;

    public TeacherCommissionsDTO() {}

    public TeacherCommissionsDTO ( Long commissionId, String course, String division, int schoolYear, String shiftName, List<SubjectDTO> subjects) {
        this.commissionId = commissionId;
        this.course = course;
        this.division = division;
        this.schoolYear = schoolYear;
        this.shiftName = shiftName;
        this.subjects = subjects;
    }
}
