package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.ReadRelationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.RelationStudentTutorRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.response.RelationTutorStudentResponse;

import java.util.List;

public interface IRelationshipService {

    ResponseEntity<?> createdRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    ResponseEntity<?> findRelationByStudentTutor(ReadRelationRequest relationRequest);

    ResponseEntity<?> updateRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    boolean deleteRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    List<RelationStudentTutorRequest> findAllRelationByIdStudent(Long idStudent);

    List<RelationStudentTutorRequest> findAllRelationByIdTutor(Long idTutor);

}
