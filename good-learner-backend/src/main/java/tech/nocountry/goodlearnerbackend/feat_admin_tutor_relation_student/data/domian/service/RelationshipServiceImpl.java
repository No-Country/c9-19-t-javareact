package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.request.RelationStudentTutorRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.response.RelationTutorStudentResponse;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.BondRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorStudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RelationshipServiceImpl implements IRelationshipService{

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private TutorStudentRepository tutorStudentRepository;

    @Autowired
    private BondRepository bondRepository;

    @Override
    public RelationTutorStudentResponse createdRelation(RelationStudentTutorRequest relationStudentTutorRequest) {
        RelationTutorStudentResponse relationStudentTutor = null;
        Optional<Student> student = studentRepository.findById(relationStudentTutorRequest.getIdStudent());
        Optional<Tutor> tutor = tutorRepository.findById(relationStudentTutorRequest.getIdTutor());
        Optional<Bond> bond = bondRepository.findBondByName(relationStudentTutorRequest.getRelation());

        if(student.isPresent() && tutor.isPresent() && bond.isPresent()){
            TutorStudent tutorStudent = tutorStudentRepository.save(new TutorStudent(student.get(), tutor.get(), bond.get()));
            relationStudentTutor = new RelationTutorStudentResponse(
                    tutorStudent.getStudent().getFirstName() + " " + tutorStudent.getStudent().getLastName(),
                    tutorStudent.getTutor().getFirstName() + " " + tutorStudent.getTutor().getFirstName(),
                    tutorStudent.getBond().getBondName()
                    );
        }
        return relationStudentTutor;
    }

    @Override
    public RelationTutorStudentResponse updateRelation(RelationStudentTutorRequest relationStudentTutorRequest) {
        return null;
    }

    @Override
    public boolean deleteRelation(RelationStudentTutorRequest relationStudentTutorRequest) {
        return false;
    }

    @Override
    public List<RelationStudentTutorRequest> findAllRelationByIdStudent(Long idStudent) {
        return null;
    }

    @Override
    public List<RelationStudentTutorRequest> findAllRelationByIdTutor(Long idTutor) {
        return null;
    }
}
