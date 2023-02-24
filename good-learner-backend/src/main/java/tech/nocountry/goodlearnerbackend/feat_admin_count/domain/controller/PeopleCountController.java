package tech.nocountry.goodlearnerbackend.feat_admin_count.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.feat_admin_count.domain.model.PersonCountDTO;
import tech.nocountry.goodlearnerbackend.feat_admin_count.domain.service.PeopleCountService;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("api/admin")
public class PeopleCountController {
    @Autowired
    private PeopleCountService peopleCountService;

    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
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
