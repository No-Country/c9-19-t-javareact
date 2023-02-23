package tech.nocountry.goodlearnerbackend.feat_admin_dashboard.domain.service;

import org.springframework.data.domain.Pageable;
import tech.nocountry.goodlearnerbackend.feat_admin_dashboard.domain.model.PersonResponseDTO;

import java.util.List;


public interface DashBoarService {
    public List<PersonResponseDTO> findAllPeoplePage(Pageable pageable) throws  Exception;

    public List<PersonResponseDTO> findAllStudentPage(Pageable pageable) throws Exception;

    public List<PersonResponseDTO> findAllTutorPage(Pageable pageable) throws Exception;

    public List<PersonResponseDTO> findAllTeacherPage(Pageable pageable) throws Exception;

}
