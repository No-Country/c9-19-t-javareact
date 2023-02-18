package tech.nocountry.goodlearnerbackend.feat_dashboard.domain.service;

import org.springframework.data.domain.Pageable;
import tech.nocountry.goodlearnerbackend.feat_dashboard.domain.model.PersonResponseDTO;

import java.util.List;


public interface DashBoarService {
    public List<PersonResponseDTO> loadPersonPage(Pageable pageable) throws  Exception;

    public List<PersonResponseDTO> loadAllStudent(Pageable pageable) throws Exception;
}
