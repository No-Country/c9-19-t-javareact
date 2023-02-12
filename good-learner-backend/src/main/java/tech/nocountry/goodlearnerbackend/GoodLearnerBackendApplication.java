package tech.nocountry.goodlearnerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.NombreRol;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.Rol;
import tech.nocountry.goodlearnerbackend.feat_auth.modelos.repositorios.RolRepository;
import tech.nocountry.goodlearnerbackend.model.Tutor;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorRepository;


import java.time.LocalDate;
import java.time.LocalDateTime;

@SpringBootApplication
public class GoodLearnerBackendApplication {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(GoodLearnerBackendApplication.class, args);
		StudentRepository studentRepository = context.getBean(StudentRepository.class);
		TutorRepository tutorRepository = context.getBean(TutorRepository.class);

		Tutor tutor = new Tutor("David", "Ayala", "40975757", LocalDate.of(1989, 9, 9), "david@gmail.com", LocalDateTime.now(), "+5491159117241", "padre");
		//Student student = new Student("Jazmin", "Ayala", "51787181", LocalDate.of(2012, 10, 19), null, LocalDateTime.now(), null, LocalDate.of(2020, 3, 3), tutor);

		//tutorRepository.save(tutor);
		RolRepository rolRepository = context.getBean(RolRepository.class);

		//rolRepository.save(new Rol(NombreRol.TEACHER));


		//studentRepository.save(student);*/
		System.out.println("Hello World");
	}

}
