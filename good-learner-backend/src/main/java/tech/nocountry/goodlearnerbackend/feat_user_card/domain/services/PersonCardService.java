package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;

public interface PersonCardService {

    public ResponseEntity<PersonDetailDTO> findPerson(Long id) throws Exception;

    public ResponseEntity<PersonDetailDTO> updatePerson(PersonDetailDTO personDetailDTO) throws Exception;

    public ResponseEntity<PersonDetailDTO> deletePersonById(Long id) throws Exception;
}
