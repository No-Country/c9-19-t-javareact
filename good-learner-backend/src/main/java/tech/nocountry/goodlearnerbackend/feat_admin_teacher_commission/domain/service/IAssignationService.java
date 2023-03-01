package tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.request.AssignationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.request.AssignationUpdateRequest;

public interface IAssignationService {

    public ResponseEntity<?> createCommissionAssignation(AssignationRequest assignationRequest);
    public ResponseEntity<?> deleteCommissionAssignationById(Long idAssignation);
    public ResponseEntity<?> findCommissionAssignationById(Long idAssignation);
    public ResponseEntity<?> updateCommissionAssignationById(AssignationUpdateRequest assignationRequest);
}
