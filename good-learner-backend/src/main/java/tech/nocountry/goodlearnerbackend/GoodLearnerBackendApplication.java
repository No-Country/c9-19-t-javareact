package tech.nocountry.goodlearnerbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import tech.nocountry.goodlearnerbackend.data.datasource.service.LoadResource;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Role;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.RoleRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;

import java.util.Optional;

@SpringBootApplication
public class GoodLearnerBackendApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(GoodLearnerBackendApplication.class, args);
		LoadResource loadResource = context.getBean(LoadResource.class);

		boolean isLoadData = false;

		if(isLoadData){
			loadResource.loadDatasource(context);

		}

		System.out.println("Built Project");

	}



}
