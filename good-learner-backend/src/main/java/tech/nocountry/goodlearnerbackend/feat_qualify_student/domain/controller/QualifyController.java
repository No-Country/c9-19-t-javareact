package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.QuerydslJpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.jwt.JwtProvider;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.request.StudentReportRequestDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.request.SubjectQualificationsDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.response.ReportQualificationsResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.request.ReportYearRequestDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.response.response2.Reports;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.response.response2.SubjectQualifications;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.service.mapper.ReportQualifyService;
import tech.nocountry.goodlearnerbackend.feat_teacher.domain.dto.TeacherCommissionsDTO;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.CommissionSubjectRepository;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;
import tech.nocountry.goodlearnerbackend.repository.QualificationRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;

import java.util.*;

@RestController
@RequestMapping("/api")
public class QualifyController {

     @Autowired
     private ReportQualifyService reportQualifyService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private QualificationRepository qualificationRepository;
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;


    @GetMapping("/student/report")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<?> getReportStudent(
            @RequestHeader(value = "Authorization") String header,
            @Validated @RequestBody ReportYearRequestDTO year,
            BindingResult validations) throws Exception{

        if(validations.hasErrors())
            return new ResponseEntity<String>("El año escolar es obligario para poder encontrar el boletin solicitado.", HttpStatus.BAD_REQUEST);

        try {
            String token = null;
            if(header != null && header.startsWith("Bearer")){
                token = header.replace("Bearer ", "");
            }
            String username = JwtProvider.getNombreUsuario(token);
            Optional<User> user = userRepository.buscarPorNombreUsuario(username);

            if(user.isEmpty()) return ResponseEntity.badRequest().build();

            Person person = user.get().getPerson();

            ReportQualificationsResponseDTO reportQualificationsResponseDTO = reportQualifyService.getReport((Student) person, year.getYear());

            return new ResponseEntity(reportQualificationsResponseDTO, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/report")
    public ResponseEntity<?> getReportStudent(@Validated @RequestBody StudentReportRequestDTO studentReportRequestDto, BindingResult validations){
        if(validations.hasErrors())
            return new ResponseEntity<String>("El ID del estudiante y el año escolar son obligatorios", HttpStatus.BAD_REQUEST);


        try {
            if(!studentRepository.existsById(studentReportRequestDto.getIdStudent()))
                return new ResponseEntity<>("No existe estudiante con el ID enviado", HttpStatus.NOT_FOUND);

            ReportQualificationsResponseDTO report = reportQualifyService
                    .getReport(studentRepository.findById(studentReportRequestDto.getIdStudent()).get(), studentReportRequestDto.getSchoolYear());

            if(report.getQualifications().size() == 0) return ResponseEntity.ok("No posee calificaciones");
            return ResponseEntity.ok(report);
        }
        catch (Exception ex) {
            return new ResponseEntity<String>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/person/report")
    public ResponseEntity<?> getReports(@Validated @RequestBody StudentReportRequestDTO studentReportRequestDto, BindingResult validations){
        if(validations.hasErrors())
            return new ResponseEntity<String>("El ID del estudiante y el año escolar son obligatorios", HttpStatus.BAD_REQUEST);

        if(!studentRepository.existsById(studentReportRequestDto.getIdStudent()))
            return new ResponseEntity<>("No existe estudiante con el ID enviado", HttpStatus.NOT_FOUND);

        Student student = studentRepository.findById(studentReportRequestDto.getIdStudent()).get();

        List<Qualification> qualificationList = reportQualifyService
                .getReports(student, studentReportRequestDto.getSchoolYear());

        List<SubjectQualifications> subjectQualificationsList = new ArrayList<>();



        for(int i=0; i< qualificationList.size(); i++){

            Qualification qualification = qualificationList.get(i);
            PeriodName periodName =  qualification.getPeriod().getPeriodName();
            SubjectName subjectName = qualification.getCommissionSubject().getSubjectId().getSubjectName();
            Integer note = qualification.getNumericalNote();
            Commission commission = qualification.getCommissionSubject().getCommissionId();

            if(commission.getSchoolYear() == studentReportRequestDto.getSchoolYear()){
                boolean existeSubject = false;
                int position = -1;
                for (int j=0; j< subjectQualificationsList.size(); j++){

                    if(subjectName == subjectQualificationsList.get(j).getSubjectName()){
                        position = j;
                        existeSubject = true;
                        break;
                    }
                }
                if(existeSubject == false){

                    Map<PeriodName, Integer> notas = new HashMap<>();
                    notas.put(periodName, note );
                    subjectQualificationsList.add(new SubjectQualifications(subjectName, notas));
                }
                else{
                    subjectQualificationsList.get(position).getQualifications().put(periodName, note);
                }
            }

        }

        String fullName = student.getFirstName() + " " + student.getLastName();
        String course = null;
        Integer yearSchool = null;
        if(subjectQualificationsList.size() != 0){
            course = qualificationList.get(0).getCommissionSubject().getCommissionId().getCourse() + qualificationList.get(0).getCommissionSubject().getCommissionId().getCourse();
        }

        Reports reports = new Reports(fullName, course, studentReportRequestDto.getSchoolYear(), subjectQualificationsList);

        return ResponseEntity.ok(reports);

    }


    @GetMapping("/report/subject/{commissionSubjectId}")
    public ResponseEntity<?> gerReportsBySubject(@PathVariable Long commissionSubjectId) {

        Optional<CommissionSubject> commissionSubjecOptional = commissionSubjectRepository.findById(commissionSubjectId);
        if(commissionSubjecOptional.isPresent()){

            CommissionSubject commissionSubject = commissionSubjecOptional.get();
            List<Qualification> qualificationList = qualificationRepository.findByCommissionSubject(commissionSubject);

            List<SubjectQualificationsDTO> subjectQualificationsList = new ArrayList<>();

            for(int i=0; i< qualificationList.size(); i++){
                Qualification qualification = qualificationList.get(i);
                PeriodName periodName =  qualification.getPeriod().getPeriodName();
                Integer note = qualification.getNumericalNote();


                boolean existePerson = false;
                int position = -1;
                for (int j=0; j< subjectQualificationsList.size(); j++){
                    if(qualification.getStudent().getIdPerson() == subjectQualificationsList.get(j).getIdPerson()){
                        position = j;
                        existePerson = true;
                        break;
                    }
                }
                if(!existePerson){
                    Map<PeriodName, Integer> notas = new HashMap<>();
                    notas.put(periodName, note );
                    SubjectQualificationsDTO data = new SubjectQualificationsDTO();
                    data.setQualifications(notas);
                    data.setIdPerson(qualification.getStudent().getIdPerson());
                    data.setDocument(qualification.getStudent().getDocument());
                    data.setFirstName(qualification.getStudent().getFirstName());
                    data.setLastName(qualification.getStudent().getLastName());
                    subjectQualificationsList.add(data);
                }
                else{
                    subjectQualificationsList.get(position).getQualifications().put(periodName, note);
                }
            }
            return ResponseEntity.ok(subjectQualificationsList);
        }
        return new ResponseEntity<>("No se ha encontrado la materia", HttpStatus.NOT_FOUND);
    }

}
