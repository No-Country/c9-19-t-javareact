package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.ReadRelationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.RelationStudentTutorRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.response.RelationTutorStudentResponse;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.BondRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorStudentRepository;

import java.util.ArrayList;
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
    public ResponseEntity<?> findRelationByStudent(Long idStudent) {
        Optional<Student> student = studentRepository.findById(idStudent);
        if(student.isPresent()){
            List<RelationTutorStudentResponse> relationsList = new ArrayList<>();

            List<TutorStudent> tutorStudents = tutorStudentRepository.findRelationByStudent(student.get());

            if(tutorStudents.size() == 0) {
                return new ResponseEntity<>("El Estudiante no posee ninguna relación", HttpStatus.NO_CONTENT);
            }
            tutorStudents.forEach(tutorStudent -> {
                relationsList.add(new RelationTutorStudentResponse(
                        tutorStudent.getStudent().getFirstName() + " " + tutorStudent.getStudent().getLastName(),
                        tutorStudent.getTutor().getFirstName() + " " + tutorStudent.getTutor().getFirstName(),
                        tutorStudent.getBond().getBondName()
                ));
            });
            return ResponseEntity.ok(relationsList);
        }
        return new ResponseEntity<String>("No se encontró el Estudiante", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> findRelationByTutor(Long idTutor) {
        Optional<Tutor> tutor = tutorRepository.findById(idTutor);
        if(tutor.isPresent()){
            List<RelationTutorStudentResponse> relationsList = new ArrayList<>();

            List<TutorStudent> tutorStudents = tutorStudentRepository.findRelationByTutor(tutor.get());
            if(tutorStudents.size() == 0) {
                return new ResponseEntity<>("El Tutor no posee ninguna relación", HttpStatus.NO_CONTENT);
            }
            tutorStudents.forEach(tutorStudent -> {
                relationsList.add(new RelationTutorStudentResponse(
                        tutorStudent.getStudent().getFirstName() + " " + tutorStudent.getStudent().getLastName(),
                        tutorStudent.getTutor().getFirstName() + " " + tutorStudent.getTutor().getFirstName(),
                        tutorStudent.getBond().getBondName()
                ));
            });
            return ResponseEntity.ok(relationsList);
        }
        return new ResponseEntity<String>("No se encontró el Tutor", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> createdRelation(RelationStudentTutorRequest relationStudentTutorRequest) {
        RelationTutorStudentResponse relationStudentTutor = null;

        Optional<Student> student = studentRepository.findById(relationStudentTutorRequest.getIdStudent());
        Optional<Tutor> tutor = tutorRepository.findById(relationStudentTutorRequest.getIdTutor());
        Optional<Bond> bond = bondRepository.findBondByName(relationStudentTutorRequest.getRelation());

        if(student.isPresent() && tutor.isPresent() && bond.isPresent()){
            List<TutorStudent> tutorStudentList = tutorStudentRepository.findRelationByTutorAndStudent(student.get(), tutor.get());

            if(tutorStudentList.size() > 0){
                return new ResponseEntity<>("No se puede crear esta relación ya que existe una relación ya creada.", HttpStatus.CONFLICT);
            }

            TutorStudent tutorStudent = tutorStudentRepository.save(new TutorStudent(student.get(), tutor.get(), bond.get()));

            relationStudentTutor = new RelationTutorStudentResponse(
                    tutorStudent.getStudent().getFirstName() + " " + tutorStudent.getStudent().getLastName(),
                    tutorStudent.getTutor().getFirstName() + " " + tutorStudent.getTutor().getFirstName(),
                    tutorStudent.getBond().getBondName()
                    );
            return ResponseEntity.ok(relationStudentTutor);
        }
        return new ResponseEntity<String>("No se ha encontrado al estudiante o tutor.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateRelation(RelationStudentTutorRequest relationStudentTutorRequest) {

        RelationTutorStudentResponse relationStudentTutor = null;

        Optional<Student> student = studentRepository.findById(relationStudentTutorRequest.getIdStudent());
        Optional<Tutor> tutor = tutorRepository.findById(relationStudentTutorRequest.getIdTutor());
        Optional<Bond> bond = bondRepository.findBondByName(relationStudentTutorRequest.getRelation());

        if(student.isPresent() && tutor.isPresent() && bond.isPresent()){
            List<TutorStudent> tutorStudentList = tutorStudentRepository.findRelationByTutorAndStudent(student.get(), tutor.get());

            if(!tutorStudentList.isEmpty()){
                TutorStudent tutorStudent = tutorStudentList.get(0);
                tutorStudent.setBond(bond.get());
                tutorStudentRepository.save(tutorStudent);

                relationStudentTutor = new RelationTutorStudentResponse(
                        tutorStudent.getStudent().getFirstName() + " " + tutorStudent.getStudent().getLastName(),
                        tutorStudent.getTutor().getFirstName() + " " + tutorStudent.getTutor().getFirstName(),
                        tutorStudent.getBond().getBondName()
                );

                return ResponseEntity.ok(relationStudentTutor);
            }
            return new ResponseEntity<String>("El Estudiante y Tutor no posee Relación que pueda ser actualizada.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>("No se ha encontrado al estudiante o tutor.", HttpStatus.NOT_FOUND);
    }

    @Override
    public boolean deleteRelation(ReadRelationRequest relationRequest) {
        Optional<Student> student = studentRepository.findById(relationRequest.getIdStudent());
        Optional<Tutor> tutor = tutorRepository.findById(relationRequest.getIdTutor());
        if(student.isPresent() && tutor.isPresent()){
            List<TutorStudent> tutorStudentList = tutorStudentRepository.findRelationByTutorAndStudent(student.get(), tutor.get());
            tutorStudentList.forEach(tutorStudent -> {
                tutorStudentRepository.delete(tutorStudent);
            });
            return true;
        }
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
