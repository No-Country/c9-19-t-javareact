package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.controller;

import org.mapstruct.Context;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.web.header.Header;
import org.springframework.security.web.header.HeaderWriter;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.jwt.JwtProvider;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.ReportQualifications;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.service.mapper.ReportQualifyService;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.model.Qualification;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;
import tech.nocountry.goodlearnerbackend.repository.QualificationRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;

import java.util.List;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/student")
public class QualifyController {

     @Autowired
     private ReportQualifyService reportQualifyService;

    @GetMapping("/report")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<?> getReportStudent(@RequestHeader(value = "Authorization") String header) throws Exception{
        try {
            String token = null;
            if(header != null && header.startsWith("Bearer")){
                token = header.replace("Bearer ", "");
            }
            String username = JwtProvider.getNombreUsuario(token);

            ReportQualifications reportQualifications = reportQualifyService.getReport(username);

            return new ResponseEntity(reportQualifications, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
