package tech.nocountry.goodlearnerbackend.feat_user_card.domain.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_user_card.domain.model.PersonResponseDTO;

import java.util.List;

public interface PersonCardService {

    public ResponseEntity<PersonDetailDTO> findPerson(Long id) throws Exception;

    public ResponseEntity<PersonDetailDTO> updatePerson(PersonDetailDTO personDetailDTO) throws Exception;

    public ResponseEntity<PersonDetailDTO> deletePersonById(Long id) throws Exception;

    public List<PersonResponseDTO> loadPersonPage(Pageable pageable) throws  Exception;
}
