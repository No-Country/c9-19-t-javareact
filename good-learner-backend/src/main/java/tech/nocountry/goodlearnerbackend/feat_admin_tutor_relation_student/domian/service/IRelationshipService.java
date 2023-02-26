package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.ReadRelationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.RelationStudentTutorRequest;

import java.util.List;

public interface IRelationshipService {

    ResponseEntity<?> findRelationByStudent(Long idStudent);
    ResponseEntity<?> findRelationByTutor(Long idTutor);
    ResponseEntity<?> createdRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    ResponseEntity<?> updateRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    boolean deleteRelation(ReadRelationRequest relationRequest);

    List<RelationStudentTutorRequest> findAllRelationByIdStudent(Long idStudent);

    List<RelationStudentTutorRequest> findAllRelationByIdTutor(Long idTutor);

}
