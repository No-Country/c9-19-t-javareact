package tech.nocountry.goodlearnerbackend.feat_qualif.domian.service;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UsuarioRepository;
import tech.nocountry.goodlearnerbackend.feat_qualif.domian.model.StudentDTO;

@Service
public class Account {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private AuthenticationManager authenticationManager;


}
