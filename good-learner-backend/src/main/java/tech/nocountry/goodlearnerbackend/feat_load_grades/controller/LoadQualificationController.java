package tech.nocountry.goodlearnerbackend.feat_load_grades.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.feat_load_grades.dto.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.feat_load_grades.service.LoadQualificationServiceImpl;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/qualifications")
public class LoadQualificationController {

    @Autowired
    private LoadQualificationServiceImpl loadQualificationService;

    @GetMapping("/{idPerson}")
    public Optional<LoadQualificationDTO> getQualificationsById(@PathVariable Long idPerson) {
        return loadQualificationService.getQualificationsById(idPerson);
    }

}
