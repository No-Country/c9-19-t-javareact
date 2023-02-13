package tech.nocountry.goodlearnerbackend.feat_auth.domian.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;

public class UserDTO {

	private Long id;
	
	@NotNull
	@NotBlank
	private String nombreUsuario;
	
	@NotNull
	@NotBlank
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String clave;
	
	@NotNull
	private RoleName rol;
	
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private String token;

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public String getClave() {
		return clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public RoleName getRol() {
		return rol;
	}

	public void setRol(RoleName rol) {
		this.rol = rol;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
	
	
}
