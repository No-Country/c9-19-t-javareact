package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.services;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.StudentResponse;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.SwitchStateStudentRequest;

public interface PersonCardService {

    public ResponseEntity<PersonDetailDTO> findPerson(Long id) throws Exception;

    public ResponseEntity<PersonDetailDTO> updatePerson(PersonDetailDTO personDetailDTO) throws Exception;

    public StudentResponse switchStateStudent(SwitchStateStudentRequest switchStateStudentRequest) throws Exception;

}
