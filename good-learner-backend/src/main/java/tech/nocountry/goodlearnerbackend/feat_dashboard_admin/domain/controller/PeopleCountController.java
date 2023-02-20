package tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.model.PersonCountDTO;
import tech.nocountry.goodlearnerbackend.feat_dashboard_admin.domain.service.PeopleCountService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/admin")
public class PeopleCountController {
    @Autowired
    private PeopleCountService peopleCountService;

    @GetMapping("/person/count")
    public ResponseEntity<?> countPersonByRol() throws Exception {
        try{
            List<PersonCountDTO> list = new ArrayList<>();

            return ResponseEntity.ok(peopleCountService.getCountPeople());

        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
