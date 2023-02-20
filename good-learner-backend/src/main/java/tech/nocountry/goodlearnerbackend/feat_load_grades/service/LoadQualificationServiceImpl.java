package tech.nocountry.goodlearnerbackend.feat_load_grades.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_load_grades.dto.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.feat_load_grades.mapper.LoadQualificationMapper;
import tech.nocountry.goodlearnerbackend.model.Qualification;
import tech.nocountry.goodlearnerbackend.repository.QualificationRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LoadQualificationServiceImpl implements ILoadQualificationService{

    private final QualificationRepository qualificationRepository;
    private final LoadQualificationMapper loadQualificationMapper;

    @Autowired
    public LoadQualificationServiceImpl(QualificationRepository qualificationRepository, LoadQualificationMapper loadQualificationMapper) {
        this.qualificationRepository = qualificationRepository;
        this.loadQualificationMapper = loadQualificationMapper;
    }

    @Override
    public List<LoadQualificationDTO> getAllQualifications() {
        return null;
    }

    @Override
    public Optional<LoadQualificationDTO> getQualificationsById(Long idPerson) {
        Optional<Qualification> qualification = qualificationRepository.findById(idPerson);
        return qualification.map(loadQualificationMapper::mapToLoadQualificationDTO)
                .orElse(null);
    }

}
