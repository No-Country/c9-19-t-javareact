package tech.nocountry.goodlearnerbackend.feat_user_card.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.data.repository.PersonPageRepository;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonRequestDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonResponseDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.PersonCardService;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.repository.DayRepository;
import tech.nocountry.goodlearnerbackend.repository.PeriodRepository;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/admin")
public class UserCardController {

    @Autowired
    DayRepository dayRepository;

    @Autowired
    PersonCardService personCardService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private PeriodRepository periodRepository;

    @Autowired
    private PersonPageRepository personPageRepository;

    @GetMapping("/person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findOneById(@PathVariable Long id) throws Exception {

        return personCardService.findPerson(id);

    }

    @PutMapping("/person")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updatePerson(@RequestBody PersonDetailDTO personDetailDTO) throws Exception {

        return personCardService.updatePerson(personDetailDTO);
    }

    @DeleteMapping("/person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> deleteUserByUsername(@PathVariable Long id) throws Exception {

        return personCardService.deletePersonById(id);
    }

    @GetMapping("/person-all")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> getAllStudent(){
        try{
            List<PersonResponseDTO> peopleResponse = new ArrayList<>();
            List<Person> peopleDao = personRepository.findAll();
            peopleDao.forEach(person -> {
                peopleResponse.add(new PersonResponseDTO(person.getIdPerson(), person.getFirstName() + " " + person.getLastName() ));
            });
            return new ResponseEntity(peopleResponse, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/person")
    public ResponseEntity<?> loadPersonPage(Pageable pageable) throws Exception {
        List<PersonResponseDTO> peopleResponse;
        try{
            peopleResponse = personCardService.loadPersonPage(pageable);
        }
        catch (Exception e){
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return ResponseEntity.ok(peopleResponse);
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
