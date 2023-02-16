package tech.nocountry.goodlearnerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Role;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.RoleRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.*;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@SpringBootApplication
public class GoodLearnerBackendApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(GoodLearnerBackendApplication.class, args);
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE TURNOS
		 */
		ShiftRepository shiftRepository = context.getBean(ShiftRepository.class);
		Shift morning  = shiftRepository.save(new Shift(ShiftName.MORNING));
		Shift afternoon  = shiftRepository.save(new Shift(ShiftName.AFTERNOON));
		Shift evening  = shiftRepository.save(new Shift(ShiftName.EVENING));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE COMISIONES
		 */
		CommissionRepository commissionRepository = context.getBean(CommissionRepository.class);
		Commission sextoA = commissionRepository.save(new Commission("6°", "A", 2023, morning));
		Commission sextoB = commissionRepository.save(new Commission("6°", "B", 2023, afternoon));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE DAY
		 */
		DayRepository dayRepository = context.getBean(DayRepository.class);
		Day lunes = dayRepository.save(new Day(DayName.MONDAY));
		Day martes = dayRepository.save(new Day(DayName.TUESDAY));
		Day miercoles = dayRepository.save(new Day(DayName.WEDNESDAY));
		Day jueves = dayRepository.save(new Day(DayName.THURSDAY));
		Day viernes = dayRepository.save(new Day(DayName.FRIDAY));
		Day sabado = dayRepository.save(new Day(DayName.SATURDAY));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE ASIGNATURAS
		 */
		SubjectRepository subjectRepository = context.getBean(SubjectRepository.class);
		Subject literatura = subjectRepository.save(new Subject(SubjectName.LITERATURE));
		Subject matematicas = subjectRepository.save(new Subject(SubjectName.MATHEMATICS));
		Subject practicasLenguaje = subjectRepository.save(new Subject(SubjectName.LANGUAGE_PRACTICES));
		Subject cienciasNaturales = subjectRepository.save(new Subject(SubjectName.NATURAL_SCIENCES));
		Subject cienciasSociales = subjectRepository.save(new Subject(SubjectName.SOCIAL_SCIENCES));
		Subject educacionArtistica = subjectRepository.save(new Subject(SubjectName.ARTISTIC_EDUCATION));
		Subject quimica = subjectRepository.save(new Subject(SubjectName.CHEMISTRY));
		Subject ciudadania = subjectRepository.save(new Subject(SubjectName.CITIZENSHIP));
		Subject economia = subjectRepository.save(new Subject(SubjectName.ECONOMY));
		Subject ingles = subjectRepository.save(new Subject(SubjectName.ENGLISH));
		Subject italiano = subjectRepository.save(new Subject(SubjectName.ITALIAN));
		Subject fisica = subjectRepository.save(new Subject(SubjectName.PHYSICAL));
		Subject educacionFisica = subjectRepository.save(new Subject(SubjectName.PHYSICAL_EDUCATION));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE TEACHER
		 */
		TeacherRepository teacherRepository = context.getBean(TeacherRepository.class);
		Teacher profesorMatematicas = teacherRepository.save(new Teacher("David", "Ayala", "40975757", LocalDate.of(1995, 9, 15), "david@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesor de Matemáticas", LocalDate.of(2018, 03, 01)));
		Teacher profesorLiteratura = teacherRepository.save(new Teacher("Romina", "Gomez", "37975757", LocalDate.of(1990, 5, 9), "romina@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesora de Literatura", LocalDate.of(2015, 03, 01)));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE COMISIÓN_ASIGNATURA
		 */
		CommissionSubjectRepository commissionSubjectRepository = context.getBean(CommissionSubjectRepository.class);
		CommissionSubject matematicas6A = commissionSubjectRepository.save(new CommissionSubject(matematicas, profesorMatematicas, lunes, sextoA, LocalTime.of(7, 30), LocalTime.of(9, 30)));
		CommissionSubject literatura6A = commissionSubjectRepository.save(new CommissionSubject(literatura, profesorLiteratura, lunes, sextoA, LocalTime.of(9, 45), LocalTime.of(11, 45)));


		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE TUTOR
		 */
		TutorRepository tutorRepository = context.getBean(TutorRepository.class);
		Tutor tutorAyalaDavid = tutorRepository.save(new Tutor("David", "Ayala", "40965757", LocalDate.of(1989, 9, 9), "david@gmail.com", LocalDateTime.now(), "+5491159117241", "4247-6578"));
		Tutor tutorHugoRamirez = tutorRepository.save(new Tutor("Hugo", "Ramirez", "22456787", LocalDate.of(1975, 11, 15), "hugo@gmail.com", LocalDateTime.now(), "+5491159117241", "4875-5758"));

		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE ESTUDIANTES
		 */
		StudentRepository studentRepository = context.getBean(StudentRepository.class);
		Student estudianteJazminAyala = studentRepository.save(new Student("Jazmin", "Ayala", "41787181", LocalDate.of(2012, 10, 19), null, LocalDateTime.now(), null, true));
		Student estudianteAgustinRamirez = studentRepository.save(new Student("Agustin", "Ramirez", "51778181", LocalDate.of(2012, 1, 9), null, LocalDateTime.now(), null, true));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE VÍNCULOS ESTUDIANTE-TUTOR
		 */
		BondRepository bondRepository = context.getBean(BondRepository.class);
		Bond padre = bondRepository.save(new Bond(BondName.FATHER));
		Bond madre = bondRepository.save(new Bond(BondName.MOTHER));
		Bond hermano = bondRepository.save(new Bond(BondName.BROTHER));
		Bond hermana = bondRepository.save(new Bond(BondName.SISTER));
		Bond abuelo = bondRepository.save(new Bond(BondName.GRANDFATHER));
		Bond abuela = bondRepository.save(new Bond(BondName.GRANDMOTHER));
		Bond tia = bondRepository.save(new Bond(BondName.AUNT));
		Bond tio = bondRepository.save(new Bond(BondName.UNCLE));
		Bond prima = bondRepository.save(new Bond(BondName.COUSIN));
		Bond amigo = bondRepository.save(new Bond(BondName.FRIEND));
		Bond tutorLegal = bondRepository.save(new Bond(BondName.LEGAL_GUARDIAN));
		Bond vecino = bondRepository.save(new Bond(BondName.NEIGHBOR));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE ESTUDIANTE-TUTOR
		 */
		TutorStudentRepository tutorStudentRepository = context.getBean(TutorStudentRepository.class);
		tutorStudentRepository.save(new TutorStudent(estudianteJazminAyala, tutorAyalaDavid, padre));
		tutorStudentRepository.save(new TutorStudent(estudianteAgustinRamirez, tutorHugoRamirez, padre));

		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE INSCRIPCIONES DE ALUMNOS
		 */
		InscriptionRepository inscriptionRepository = context.getBean(InscriptionRepository.class);
		Inscription inscriptionJazminAyala6A2023 = inscriptionRepository.save(new Inscription(LocalDate.of(2023, 02, 05), estudianteJazminAyala,sextoA));
		Inscription inscriptionAgustinRamirez6A2023 = inscriptionRepository.save(new Inscription(LocalDate.of(2023, 02, 05), estudianteAgustinRamirez,sextoA));


		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE ESCALAS DE CALIFICACIONES VALORATIVAS
		 */
		ScaleQualificationRepository scaleQualificationRepository = context.getBean(ScaleQualificationRepository.class);
		ScaleQualification excelente = scaleQualificationRepository.save(new ScaleQualification(ScaleQualificationName.EXCELLENT));
		ScaleQualification muyBien = scaleQualificationRepository.save(new ScaleQualification(ScaleQualificationName.VERY_GOOD));
		ScaleQualification bien = scaleQualificationRepository.save(new ScaleQualification(ScaleQualificationName.GOOD));
		ScaleQualification regular = scaleQualificationRepository.save(new ScaleQualification(ScaleQualificationName.REGULAR));
		ScaleQualification insuficiente = scaleQualificationRepository.save(new ScaleQualification(ScaleQualificationName.INSUFFICIENT));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE TIPO DE CALIFICACIONES
		 */
		TypeQualificationRepository typeQualificationRepository = context.getBean(TypeQualificationRepository.class);
		TypeQualification examenParcial = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PARTIAL_EXAM));
		TypeQualification recuperatioExamenParcial = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.RECOVERY_PARTIAL_EXAM));
		TypeQualification conceptual = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.CONCEPTUAL));
		TypeQualification trabajoGrupal = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.TEAM_WORK));
		TypeQualification trabajoPractico = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PRACTICE_WORK));
		TypeQualification presentacion = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.PRESENTATION));
		TypeQualification recuperatorioMateria = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.RECOVERY_EXAM_SUBJECT));
		TypeQualification examenDiagnostico = typeQualificationRepository.save(new TypeQualification(TypeQualificationName.DIAGNOSTIC_EXAM));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA PERIODOS DE CALIFICACIONES
		 */
		PeriodRepository periodRepository = context.getBean(PeriodRepository.class);
		Period primerTrimestre = periodRepository.save(new Period(PeriodName.FIRST_TRIMESTER));
		Period segundoTrimestre = periodRepository.save(new Period(PeriodName.SECOND_TRIMESTER));
		Period tercerTrimestre = periodRepository.save(new Period(PeriodName.THIRD_TRIMESTER));
		Period periodoAnual = periodRepository.save(new Period(PeriodName.ANNUAL));
		Period periodoPrevios = periodRepository.save(new Period(PeriodName.PREVIOUS));
		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE CALIFICACIONES
		 */
		/*QualificationRepository qualificationRepository = context.getBean(QualificationRepository.class);
		Qualification qualification = new Qualification();*/

		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE ROLES DE USUARIOS
		 */
		RoleRepository roleRepository = context.getBean(RoleRepository.class);
		Role rolAdministrador = roleRepository.save(new Role(RoleName.ADMINISTRATOR));
		Role rolProfesor = roleRepository.save(new Role(RoleName.TEACHER));
		Role rolEstudiante = roleRepository.save(new Role(RoleName.STUDENT));
		Role rolTutor = roleRepository.save(new Role(RoleName.TUTOR));


		/**----------------------------------------------------------------------------------------------
		 * 								CARGA DE USUARIOS
		 */
		PasswordEncoder passwordEncoder = context.getBean(PasswordEncoder.class);
		UserRepository userRepository = context.getBean(UserRepository.class);

		userRepository.save(new User(estudianteAgustinRamirez.getDocument(), passwordEncoder.encode(estudianteAgustinRamirez.getDocument()), rolEstudiante, estudianteAgustinRamirez));
		userRepository.save(new User(estudianteJazminAyala.getDocument(), passwordEncoder.encode(estudianteJazminAyala.getDocument()), rolEstudiante, estudianteJazminAyala));

		userRepository.save(new User(profesorLiteratura.getDocument(), passwordEncoder.encode(profesorLiteratura.getDocument()), rolProfesor, profesorLiteratura));
		userRepository.save(new User(profesorMatematicas.getDocument(), passwordEncoder.encode(profesorMatematicas.getDocument()), rolProfesor, profesorMatematicas));

		userRepository.save(new User(tutorAyalaDavid.getDocument(), passwordEncoder.encode(tutorAyalaDavid.getDocument()), rolTutor, tutorAyalaDavid));
		userRepository.save(new User(tutorHugoRamirez.getDocument(), passwordEncoder.encode(tutorHugoRamirez.getDocument()), rolTutor, tutorHugoRamirez));




		//studentRepository.save(student);*/
		System.out.println("Hello World");




		/*RoleRepository rolRepository = context.getBean(RoleRepository.class);
		rolRepository.save(new Role(RoleName.TEACHER));
		rolRepository.save(new Role(RoleName.STUDENT));
		rolRepository.save(new Role(RoleName.ADMINISTRATOR));*/
	}

}
