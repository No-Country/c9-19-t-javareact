package tech.nocountry.goodlearnerbackend.data.datasource.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.data.datasource.service.LoadCommission;
import tech.nocountry.goodlearnerbackend.data.datasource.service.LoadResource;

@RestController
@RequestMapping("/api/datasource")

public class DatasourceController {

    @Autowired
    LoadCommission loadCommission;

    @PostMapping("/commission")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> loadDatasourceCommission(){
        try{
            loadCommission.loadCommission();
            return new ResponseEntity<>("Load datasource commission", HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
