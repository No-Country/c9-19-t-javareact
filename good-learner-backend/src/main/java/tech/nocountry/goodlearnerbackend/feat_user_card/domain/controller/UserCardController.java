package tech.nocountry.goodlearnerbackend.feat_user_card.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.PersonCardService;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/admin/")
public class UserCardController {

    @Autowired
    PersonCardService personCardService;

    @GetMapping("user/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findOneById(@PathVariable Long id) throws Exception {

        return personCardService.findPerson(id);

    }

    @PutMapping("user")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updatePerson(@RequestBody PersonDetailDTO personDetailDTO) throws Exception {

        return personCardService.updatePerson(personDetailDTO);
    }
}
