package tech.nocountry.goodlearnerbackend.feat_load_grades.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.request.QualifyStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.response.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.feat_load_grades.service.mapper.QualifyStudentMapper;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.response.QualifyStudentResponse;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class QualificationServiceImpl implements IQualificationService {

    @Autowired
    private QualificationRepository qualificationRepository;
    @Autowired
    private QualifyStudentMapper qualifyStudentMapper;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;
    @Autowired
    private PeriodRepository periodRepository;
    private final TypeQualificationRepository typeQualificationRepository;

    @Autowired
    public QualificationServiceImpl(QualificationRepository qualificationRepository, QualifyStudentMapper qualifyStudentMapper,
                                    StudentRepository studentRepository,
                                    CommissionSubjectRepository commissionSubjectRepository,
                                    PeriodRepository periodRepository,
                                    TypeQualificationRepository typeQualificationRepository) {
        this.qualificationRepository = qualificationRepository;
        this.qualifyStudentMapper = qualifyStudentMapper;
        this.studentRepository = studentRepository;
        this.commissionSubjectRepository = commissionSubjectRepository;
        this.periodRepository = periodRepository;
        this.typeQualificationRepository = typeQualificationRepository;
    }

    @Override
    public List<LoadQualificationDTO> getAllQualifications() {
        return null;
    }

    @Override
    public Optional<LoadQualificationDTO> getQualificationsById(Long idPerson) {
        Optional<Qualification> qualification = qualificationRepository.findById(idPerson);
        return qualification.map(qualifyStudentMapper::mapToLoadQualificationDTO)
                .orElse(null);
    }

    @Override
    public ResponseEntity<?> createQualifyStudent(QualifyStudentRequest qualifyStudent) {
        Optional<Student> studentOpt = studentRepository.findById(qualifyStudent.getIdStudent());
        Optional<CommissionSubject> commissionSubjectOptional = commissionSubjectRepository.findById(qualifyStudent.getIdCommissionSubject());
        Optional<Period> periodOpt = periodRepository.findByPeriodName(qualifyStudent.getPeriodName());
        Optional<TypeQualification> typeQualification = typeQualificationRepository.findById(9L);

        if(studentOpt.isPresent() && commissionSubjectOptional.isPresent()){
            if(periodOpt.isPresent()){

                Qualification qualification = qualificationRepository.save( new Qualification(
                        studentOpt.get(),
                        commissionSubjectOptional.get(),
                        periodOpt.get(),
                        typeQualification.get(),
                        qualifyStudent.getNumericalQualification()
                ));
                QualifyStudentResponse qualifyStudentResponse = new QualifyStudentResponse(
                        qualification.getIdQualification(),
                        qualification.getNumericalNote(),
                        qualifyStudent.getIdCommissionSubject(),
                        periodOpt.get().getPeriodName(),
                        studentOpt.get().getIdPerson()
                );
                return new ResponseEntity<>(qualifyStudentResponse, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("No se ha encontrado el nombre del periodo.", HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>("No se ha encontrado al estudiante o a la comisión.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> deleteByIdQualifyStudent(Long idQualifyStudent) {
        if(qualificationRepository.existsById(idQualifyStudent)){
            qualificationRepository.deleteById(idQualifyStudent);
            return ResponseEntity.noContent().build();
        }
        return new ResponseEntity<>("No se ha encontrado Calificación por su ID", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateQualifyStudent(QualifyStudentResponse qualifyStudentRequest) {
        Optional<Qualification> qualificationOpt = qualificationRepository.findById(qualifyStudentRequest.getIdQualification());

        if(qualificationOpt.isPresent()){
            Optional<Student> studentOpt = studentRepository.findById(qualifyStudentRequest.getIdStudent());
            Optional<CommissionSubject> commissionSubjectOptional = commissionSubjectRepository.findById(qualifyStudentRequest.getIdCommissionSubject());

            if(studentOpt.isPresent() && commissionSubjectOptional.isPresent()){
                Optional<Period> periodOpt = periodRepository.findByPeriodName(qualifyStudentRequest.getPeriodName());

                if(periodOpt.isPresent()) {
                    Optional<TypeQualification> typeQualification = typeQualificationRepository.findById(9L);

                    Qualification qualification = qualificationOpt.get();

                    qualification.setStudent(studentOpt.get());
                    qualification.setCommissionSubject(commissionSubjectOptional.get());
                    qualification.setPeriod(periodOpt.get());
                    qualification.setNumericalNote(qualifyStudentRequest.getNumericalQualification());
                    qualification.setTypeQualification(typeQualification.get());
                    qualificationRepository.save(qualification);

                    return new ResponseEntity<>(qualifyStudentRequest, HttpStatus.CREATED);
                } else {
                    return new ResponseEntity<>("No se ha encontrado el nombre del periodo.", HttpStatus.NOT_FOUND);
                }

            } else{
                return new ResponseEntity<>("No se ha encontrado al estudiante o a la comisión.", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>("La calificación que desea modificar no existe.", HttpStatus.NOT_FOUND);
        }
    }

}
