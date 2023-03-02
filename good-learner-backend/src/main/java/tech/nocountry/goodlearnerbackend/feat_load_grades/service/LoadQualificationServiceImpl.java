package tech.nocountry.goodlearnerbackend.feat_load_grades.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.request.QualifyStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.response.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.feat_load_grades.mapper.QualifyStudentMapper;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.response.QualifyStudentResponse;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class LoadQualificationServiceImpl implements ILoadQualificationService{

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
    public LoadQualificationServiceImpl(QualificationRepository qualificationRepository, QualifyStudentMapper qualifyStudentMapper,
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
                return ResponseEntity.ok(new QualifyStudentResponse(
                        qualification.getIdQualification(),
                        qualification.getNumericalNote(),
                        qualifyStudent.getIdCommissionSubject(),
                        periodOpt.get().getPeriodName(),
                        studentOpt.get().getIdPerson()
                ));
            } else {
                return new ResponseEntity<>("No se ha encontrado el nombre del periodo.", HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>("No se ha encontrado al estudiante o a la comisión.", HttpStatus.NOT_FOUND);
    }

}
