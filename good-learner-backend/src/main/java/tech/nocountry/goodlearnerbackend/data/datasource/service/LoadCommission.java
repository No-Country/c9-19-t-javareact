package tech.nocountry.goodlearnerbackend.data.datasource.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.Role;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.User;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.RoleRepository;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UserRepository;
import tech.nocountry.goodlearnerbackend.model.*;
import tech.nocountry.goodlearnerbackend.repository.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class LoadCommission {
    @Autowired
    private CommissionRepository commissionRepository;
    @Autowired
    private ShiftRepository shiftRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private CommissionSubjectRepository commissionSubjectRepository;
    @Autowired
    private SubjectRepository subjectRepository;
    @Autowired
    private DayRepository dayRepository;
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public void loadCommission(){
        Optional<Shift> morning = shiftRepository.findShiftByName(ShiftName.MORNING);
        Optional<Shift> afternoon = shiftRepository.findShiftByName(ShiftName.AFTERNOON);

        Commission quintoA = commissionRepository.save(new Commission("5°", "A", 2023, morning.get()));
        Commission quintaB = commissionRepository.save(new Commission("5°", "B", 2023, afternoon.get()));
        Commission cuartoA = commissionRepository.save(new Commission("4°", "A", 2023, morning.get()));
        Commission cuartoB = commissionRepository.save(new Commission("4°", "B", 2023, afternoon.get()));
        Commission terceroA = commissionRepository.save(new Commission("3°", "A", 2023, morning.get()));
        Commission terceroB = commissionRepository.save(new Commission("3°", "B", 2023, afternoon.get()));
        Commission segundoA = commissionRepository.save(new Commission("2°", "A", 2023, morning.get()));
        Commission segundoB = commissionRepository.save(new Commission("2°", "B", 2023, afternoon.get()));
        Commission primerA = commissionRepository.save(new Commission("1°", "A", 2023, morning.get()));
        Commission primeroB = commissionRepository.save(new Commission("1°", "B", 2023, afternoon.get()));




        Teacher profesor1 = teacherRepository.save(new Teacher("David", "Ayala", "22222222", LocalDate.of(1995, 9, 15), "davi@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesor", LocalDate.of(2018, 03, 01)));
        Teacher profesor2 = teacherRepository.save(new Teacher("Romina", "Gomez", "11111111", LocalDate.of(1990, 5, 9), "romi@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesor", LocalDate.of(2015, 03, 01)));
        Teacher profesor3 = teacherRepository.save(new Teacher("Juana", "Lopez", "333333333", LocalDate.of(1990, 5, 9), "juan@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesor", LocalDate.of(2015, 03, 01)));
        Teacher profesor4 = teacherRepository.save(new Teacher("Romina", "Gomez", "44444444", LocalDate.of(1990, 5, 9), "romia@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesor", LocalDate.of(2015, 03, 01)));
        Teacher profesor5 = teacherRepository.save(new Teacher("Ezequiel", "Roldan", "55555555", LocalDate.of(1990, 5, 9), "eze@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesor", LocalDate.of(2015, 03, 01)));
        Teacher profesor6 = teacherRepository.save(new Teacher("Yesica", "Sosa", "66666666", LocalDate.of(1990, 5, 9), "yesica@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesora", LocalDate.of(2015, 03, 01)));
        Teacher profesor7 = teacherRepository.save(new Teacher("Luis", "Suarez", "77777777", LocalDate.of(1990, 5, 9), "luis@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesora", LocalDate.of(2015, 03, 01)));
        Teacher profesor8 = teacherRepository.save(new Teacher("Carlos", "Alvarez", "88888888", LocalDate.of(1990, 5, 9), "carlos@gmail.com", LocalDateTime.now(), "+5491159117241", "Profesora", LocalDate.of(2015, 03, 01)));

        Optional<Role> roleTeacher = roleRepository.findById(2L);

        userRepository.save(new User(profesor1.getDocument(), passwordEncoder.encode(profesor1.getDocument()), roleTeacher.get(), profesor1));
        userRepository.save(new User(profesor2.getDocument(), passwordEncoder.encode(profesor2.getDocument()), roleTeacher.get(), profesor2));
        userRepository.save(new User(profesor3.getDocument(), passwordEncoder.encode(profesor3.getDocument()), roleTeacher.get(), profesor3));
        userRepository.save(new User(profesor4.getDocument(), passwordEncoder.encode(profesor4.getDocument()), roleTeacher.get(), profesor4));
        userRepository.save(new User(profesor5.getDocument(), passwordEncoder.encode(profesor5.getDocument()), roleTeacher.get(), profesor5));
        userRepository.save(new User(profesor6.getDocument(), passwordEncoder.encode(profesor6.getDocument()), roleTeacher.get(), profesor6));
        userRepository.save(new User(profesor7.getDocument(), passwordEncoder.encode(profesor7.getDocument()), roleTeacher.get(), profesor7));
        userRepository.save(new User(profesor8.getDocument(), passwordEncoder.encode(profesor8.getDocument()), roleTeacher.get(), profesor8));


        Optional<Subject> ingles = subjectRepository.findByName(SubjectName.ENGLISH);
        Optional<Subject> fisica = subjectRepository.findByName(SubjectName.PHYSICAL);
        Optional<Subject> edArtistica = subjectRepository.findByName(SubjectName.ARTISTIC_EDUCATION);
        Optional<Subject> edFisica = subjectRepository.findByName(SubjectName.PHYSICAL_EDUCATION);
        Optional<Subject> quimica = subjectRepository.findByName(SubjectName.CHEMISTRY);
        Optional<Subject> ciudadania = subjectRepository.findByName(SubjectName.CITIZENSHIP);
        Optional<Subject> economia = subjectRepository.findByName(SubjectName.ECONOMY);
        Optional<Subject> italiano = subjectRepository.findByName(SubjectName.ITALIAN);


        List<Day> dayList = dayRepository.findAll();

        Optional<Commission> sextoA = commissionRepository.findById(1L);

        CommissionSubject ingles6A = commissionSubjectRepository.save(new CommissionSubject(ingles.get(), profesor1, dayList.get(0), sextoA.get(), LocalTime.of(7, 30), LocalTime.of(9, 30)));
        CommissionSubject fisica6A = commissionSubjectRepository.save(new CommissionSubject(fisica.get(), profesor2, dayList.get(1), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));
        CommissionSubject edArtistica6A = commissionSubjectRepository.save(new CommissionSubject(edArtistica.get(), profesor3, dayList.get(2), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));
        CommissionSubject edFisica6A = commissionSubjectRepository.save(new CommissionSubject(edFisica.get(), profesor4, dayList.get(3), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));
        CommissionSubject quimica6A = commissionSubjectRepository.save(new CommissionSubject(quimica.get(), profesor5, dayList.get(4), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));
        CommissionSubject ciudadania6A = commissionSubjectRepository.save(new CommissionSubject(ciudadania.get(), profesor6, dayList.get(2), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));
        CommissionSubject economia6A = commissionSubjectRepository.save(new CommissionSubject(economia.get(), profesor7, dayList.get(2), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));
        CommissionSubject italiano6A = commissionSubjectRepository.save(new CommissionSubject(italiano.get(), profesor8, dayList.get(3), sextoA.get(), LocalTime.of(9, 45), LocalTime.of(11, 45)));

    }
}
