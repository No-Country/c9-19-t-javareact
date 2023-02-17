package tech.nocountry.goodlearnerbackend.feat_auth.jwt;

import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.time.Instant;
import java.util.Date;

public class JwtProvider {

	//private static final Key LlAVE_SECRETA = Keys.secretKeyFor(SignatureAlgorithm.HS512);
	
	private static final Key LlAVE_SECRETA = new SecretKeySpec("F@cturacionSR12023F@cturacionSR12023F@cturacionSR12023".getBytes(), SignatureAlgorithm.HS512.getJcaName());
	
	private static final long TIEMPO_EXPIRACION = 1_360_000_000;

	public static String generarTokenJWT(String nombreUsuario) {
		return Jwts.builder().setSubject(nombreUsuario)
                .setExpiration(Date.from(Instant.now().plusMillis(TIEMPO_EXPIRACION))).signWith(LlAVE_SECRETA)
                .compact();
	}

	public static boolean validarTokenJWT(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(LlAVE_SECRETA).build().parseClaimsJws(token);
	        return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public static String getNombreUsuario(String token) {
		JwtParser parser = Jwts.parserBuilder().setSigningKey(LlAVE_SECRETA).build();
	    return parser.parseClaimsJws(token).getBody().getSubject();
	}

}
