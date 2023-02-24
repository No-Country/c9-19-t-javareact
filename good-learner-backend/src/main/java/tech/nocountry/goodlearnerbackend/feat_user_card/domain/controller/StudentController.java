package tech.nocountry.goodlearnerbackend.feat_user_card.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.PersonCardService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/admin")
public class StudentController {
     @Autowired
    PersonCardService personCardService;
    /*
    @GetMapping("/student")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> getAllStudent(Pageable pageable) throws Exception {
        try{

            return ResponseEntity.ok(personCardService.loadAllStudent(pageable));
        } catch (Exception e){
            return ResponseEntity.
        }
    }*/
}
