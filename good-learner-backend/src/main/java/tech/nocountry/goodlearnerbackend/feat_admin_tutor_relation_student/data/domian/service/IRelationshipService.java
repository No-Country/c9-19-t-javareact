package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.service;

import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.request.RelationStudentTutorRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.response.RelationTutorStudentResponse;

import java.util.List;

public interface IRelationshipService {

    RelationTutorStudentResponse createdRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    RelationTutorStudentResponse updateRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    boolean deleteRelation(RelationStudentTutorRequest relationStudentTutorRequest);

    List<RelationStudentTutorRequest> findAllRelationByIdStudent(Long idStudent);

    List<RelationStudentTutorRequest> findAllRelationByIdTutor(Long idTutor);

}
