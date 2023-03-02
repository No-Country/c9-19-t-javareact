package tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.model.request.TeacherSubjectRequest;

public interface ICommissionSubjectService {

    public ResponseEntity<?> updateTeacherSubject(TeacherSubjectRequest teacherSubjectRequest);

    public ResponseEntity<?> deleteTeacherSubject(TeacherSubjectRequest teacherSubjectRequest);
}
