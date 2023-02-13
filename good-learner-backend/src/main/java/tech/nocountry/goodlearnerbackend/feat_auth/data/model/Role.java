package tech.nocountry.goodlearnerbackend.feat_auth.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "role")
public class Role {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_role")
	private Long id;

	@Column(name = "role_name")
    @Enumerated(EnumType.STRING)
    private RoleName nombreRol;

	public Role(RoleName nombreRol) {this.nombreRol = nombreRol;}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public RoleName getNombreRol() {
		return nombreRol;
	}

	public void setNombreRol(RoleName nombreRol) {
		this.nombreRol = nombreRol;
	}
    
    

}
