package tech.nocountry.goodlearnerbackend.feat_teacher.domain.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class SubjectDTO {
    private Long subjectId;
    private String subjectName;
    private Long commissionSubjectId;

    public SubjectDTO() {}

    public SubjectDTO(Long subjectId, String subjectName, Long commissionSubjectId) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.commissionSubjectId = commissionSubjectId;
    }
}
