package tech.nocountry.goodlearnerbackend.feat_show_commission.domain.dto;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.Day;
import tech.nocountry.goodlearnerbackend.model.Subject;
import tech.nocountry.goodlearnerbackend.model.Teacher;

import java.time.LocalTime;

@Getter
@Setter
@ToString
public class CommissionSubjectDTO {
    private Long idCommissionSubject;
    private Subject subject;
    private Teacher teacher;
    private Day day;
    private CommissionDTO commission;
    private LocalTime startTime;
    private LocalTime endTime;

    public CommissionSubjectDTO() {}

    public CommissionSubjectDTO(Long idCommissionSubject, Subject subject, Teacher teacher, Day day, CommissionDTO commission, LocalTime startTime, LocalTime endTime) {
        this.idCommissionSubject = idCommissionSubject;
        this.subject = subject;
        this.teacher = teacher;
        this.day = day;
        this.commission = commission;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public CommissionSubjectDTO(Subject subject, Teacher teacher, Day day, CommissionDTO commission, LocalTime startTime, LocalTime endTime) {
        this.subject = subject;
        this.teacher = teacher;
        this.day = day;
        this.commission = commission;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
