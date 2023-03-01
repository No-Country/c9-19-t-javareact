package tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.model.response;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.DayName;

import java.time.LocalTime;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TeacherSubjectCommissionResponse {
    private Long idCommissionSubject;
    private Long idSubject;
    private Long idTeacher;
    private Long idCommission;
    private DayName dayName;
    private LocalTime starTime;
    private LocalTime endTime;
}
