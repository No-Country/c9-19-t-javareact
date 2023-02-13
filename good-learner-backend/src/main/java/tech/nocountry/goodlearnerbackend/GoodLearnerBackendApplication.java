package tech.nocountry.goodlearnerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.NombreRol;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Rol;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.RolRepository;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.entities.ScaleQualification;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.entities.TypeQualification;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.enums.ScaleQualificationName;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.model.enums.TypeQualificationName;
import tech.nocountry.goodlearnerbackend.feat_qualif.data.repository.*;
import tech.nocountry.goodlearnerbackend.feat_qualif.domian.controller.QualificationController;
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

		ScaleQualificationRepository scaleQualification = context.getBean(ScaleQualificationRepository.class);
		TypeQualificationRepository typeQualificationRepository = context.getBean(TypeQualificationRepository.class);
		QualificationRepository qualificationRepository = context.getBean(QualificationRepository.class);
		PeriodRepository periodRepository = context.getBean(PeriodRepository.class);
		TypePeriodRepository typePeriodRepository = context.getBean(TypePeriodRepository.class);

		scaleQualification.save(new ScaleQualification(ScaleQualificationName.EXCELLENT));
		scaleQualification.save(new ScaleQualification(ScaleQualificationName.VERY_GOOD));
		scaleQualification.save(new ScaleQualification(ScaleQualificationName.GOOD));
		scaleQualification.save(new ScaleQualification(ScaleQualificationName.REGULAR));
		scaleQualification.save(new ScaleQualification(ScaleQualificationName.EVIL));

		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.CONCEPTUAL));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.FINAL_EXAM));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.CONCEPTUAL));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PARTIAL_EXAM));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PRELIMINARY_EXAM));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.RECOVERY_EXAM_SUBJECT));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PRACTICE_WORK));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PRESENTATION));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.TEAM_WORK));
		typeQualificationRepository.save(new TypeQualification(TypeQualificationName.CONCEPTUAL));







		Tutor tutor = new Tutor("David", "Ayala", "40975757", LocalDate.of(1989, 9, 9), "david@gmail.com", LocalDateTime.now(), "+5491159117241", "padre");
		//Student student = new Student("Jazmin", "Ayala", "51787181", LocalDate.of(2012, 10, 19), null, LocalDateTime.now(), null, LocalDate.of(2020, 3, 3), tutor);

		//tutorRepository.save(tutor);
		RolRepository rolRepository = context.getBean(RolRepository.class);

		/*rolRepository.save(new Rol(NombreRol.TEACHER));
		rolRepository.save(new Rol(NombreRol.STUDENT));
		rolRepository.save(new Rol(NombreRol.ADMINISTRATOR));*/




		//studentRepository.save(student);*/
		System.out.println("Hello World");
	}

}
