package tech.nocountry.goodlearnerbackend.feat_dashboard.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.feat_dashboard.domain.service.DashBoarService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/admin")
public class DashboardController {

    @Autowired
    private DashBoarService dashBoarService;


    @GetMapping(path = "/person")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> loadPersonPage(Pageable pageable) throws Exception {
        try{
            return ResponseEntity.ok( dashBoarService.loadPersonPage(pageable));
        }
        catch (Exception e){
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @GetMapping("/student")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> getAllStudent(Pageable pageable){
        try{
            return ResponseEntity.ok(dashBoarService.loadAllStudent(pageable));

        } catch (Exception e){
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
