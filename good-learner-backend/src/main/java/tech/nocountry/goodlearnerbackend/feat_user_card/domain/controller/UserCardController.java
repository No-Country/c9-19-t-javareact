package tech.nocountry.goodlearnerbackend.feat_user_card.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.services.PersonCardService;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/admin")
public class UserCardController {

    @Autowired
    private PersonCardService personCardService;

    /**
     * Recuperar una Persona por su ID
     * @param id
     * @return ResponseEntity
     * @throws Exception
     */
    @GetMapping("/person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findOneById(@PathVariable Long id) throws Exception {

        return personCardService.findPerson(id);

    }

    /**
     * Actualizar una Persona
     * @param personDetailDTO
     * @return ResponseEntity
     * @throws Exception
     */
    @PutMapping("/person")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updatePerson(@RequestBody PersonDetailDTO personDetailDTO) throws Exception {

        return personCardService.updatePerson(personDetailDTO);
    }

    /**
     * Eliminar una Persona por su ID, borrando teniendo en cuenta que está referenciado.
     * @param id
     * @return
     * @throws Exception
     */
    @DeleteMapping("/person/{id}")
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
