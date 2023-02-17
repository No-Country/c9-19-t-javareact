package tech.nocountry.goodlearnerbackend.feat_user_card.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.PersonCardService;
import tech.nocountry.goodlearnerbackend.repository.DayRepository;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/admin/")
public class UserCardController {

    @Autowired
    DayRepository dayRepository;

    @Autowired
    PersonCardService personCardService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findOneById(@PathVariable Long id) throws Exception {

        return personCardService.findPerson(id);

    }

    @PutMapping("person")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updatePerson(@RequestBody PersonDetailDTO personDetailDTO) throws Exception {

        return personCardService.updatePerson(personDetailDTO);
    }

    @DeleteMapping("person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> deleteUserByUsername(@PathVariable Long id) throws Exception {

        return personCardService.deletePersonById(id);
    }

    /*@GetMapping("user/person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findUserByIdPerson(@PathVariable Long id) throws Exception {
        Optional<User> user = userRepository.buscarPorIdPerson(id);
        if(user.isEmpty()){
            return ResponseEntity.ok("No se encontro Persona");
        }
        return ResponseEntity.ok(user);
    }*/

}
