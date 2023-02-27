package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.response;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.ShiftName;

import java.util.List;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CommissionWithStudentResponse {
    private Long idCommission;
    private String course;
    private Integer year;
    private ShiftName shift;
    private List<StudentResponse> studentResponseList;
}
