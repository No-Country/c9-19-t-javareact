package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.Day;
import tech.nocountry.goodlearnerbackend.model.Subject;
import tech.nocountry.goodlearnerbackend.model.Teacher;
import tech.nocountry.goodlearnerbackend.model.Commission;

import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@ToString
public class CommissionSubjectDTO {
    private Long idCommissionSubject;
    private Subject subject;
    private Teacher teacher;
    public CommissionSubjectDTO() {}

    public CommissionSubjectDTO(Long idCommissionSubject, Subject subject, Teacher teacher) {
        this.idCommissionSubject = idCommissionSubject;
        this.teacher = teacher;
        this.subject = subject;
    }
}
