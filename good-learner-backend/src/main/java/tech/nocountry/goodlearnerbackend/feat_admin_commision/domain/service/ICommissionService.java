package tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.service;

import org.springframework.http.ResponseEntity;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request.CommissionRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_commision.domain.model.request.CommissionUpdateRequest;

public interface ICommissionService {

    public ResponseEntity<?> findCommissionById(Long idCommission);

    public ResponseEntity<?> createCommission(CommissionRequest commissionRequest);

    public ResponseEntity<?> updateCommission(CommissionUpdateRequest commissionRequest);

    //public ResponseEntity<?> deleteCommission(Long idCommission);
}
