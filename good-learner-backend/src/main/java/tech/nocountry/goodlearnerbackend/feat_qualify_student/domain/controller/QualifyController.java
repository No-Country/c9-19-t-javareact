package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.jwt.JwtProvider;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.ReportQualificationsResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.ReportYearRequestDTO;
import tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.service.mapper.ReportQualifyService;

@RestController
@RequestMapping("/api/student")
public class QualifyController {

     @Autowired
     private ReportQualifyService reportQualifyService;

    @GetMapping("/report")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<?> getReportStudent(@RequestHeader(value = "Authorization") String header, @RequestBody ReportYearRequestDTO year) throws Exception{
        try {
            String token = null;
            if(header != null && header.startsWith("Bearer")){
                token = header.replace("Bearer ", "");
            }
            String username = JwtProvider.getNombreUsuario(token);

            ReportQualificationsResponseDTO reportQualificationsResponseDTO = reportQualifyService.getReport(username, year.getYear());

            return new ResponseEntity(reportQualificationsResponseDTO, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
