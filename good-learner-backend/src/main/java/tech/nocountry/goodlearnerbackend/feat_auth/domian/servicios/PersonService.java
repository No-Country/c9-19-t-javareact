package tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_auth.data.model.RoleName;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.PersonRegisterDTO;
import tech.nocountry.goodlearnerbackend.model.Person;
import tech.nocountry.goodlearnerbackend.model.Student;
import tech.nocountry.goodlearnerbackend.model.Teacher;
import tech.nocountry.goodlearnerbackend.model.Tutor;
import tech.nocountry.goodlearnerbackend.repository.PersonRepository;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;
import tech.nocountry.goodlearnerbackend.repository.TeacherRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorRepository;

import java.time.LocalDateTime;

@Service
public class PersonService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private PersonRepository personRepository;

    /**
     * Guardar Persona, teniendo en cuanta si es Estudiante, Tutor, Profesor o Administrador.
     * @param personRegisterDto
     * @return
     */
    public PersonRegisterDTO savePerson(PersonRegisterDTO personRegisterDto){

        PersonRegisterDTO personRegister = personRegisterDto;

        if(personRegisterDto.getRoleName() == RoleName.STUDENT){

           Student student = studentRepository.save(new Student(
                    personRegisterDto.getFirstName(),
                    personRegisterDto.getLastName(),
                    personRegisterDto.getDocument(),
                    personRegisterDto.getBirthDate(),
                    personRegisterDto.getEmail(),
                    LocalDateTime.now(),
                    personRegisterDto.getPhone(),
                    true));
           personRegister.setId(student.getIdPerson());

        } else  if(personRegisterDto.getRoleName() == RoleName.TUTOR){

           Tutor tutor = tutorRepository.save(new Tutor(
                    personRegisterDto.getFirstName(),
                    personRegisterDto.getLastName(),
                    personRegisterDto.getDocument(),
                    personRegisterDto.getBirthDate(),
                    personRegisterDto.getEmail(),
                    LocalDateTime.now(),
                    personRegisterDto.getPhone(),
                    null));
           personRegister.setId(tutor.getIdPerson());

        } else if (personRegisterDto.getRoleName() == RoleName.TEACHER) {
            Teacher teacher = teacherRepository.save(new Teacher(
                    personRegisterDto.getFirstName(),
                    personRegisterDto.getLastName(),
                    personRegisterDto.getDocument(),
                    personRegisterDto.getBirthDate(),
                    personRegisterDto.getEmail(),
                    LocalDateTime.now(),
                    personRegisterDto.getPhone(),
                    null,
                    null));
            personRegister.setId(teacher.getIdPerson());
        }
        else if (personRegisterDto.getRoleName() == RoleName.ADMINISTRATOR) {
            Person person = personRepository.save(new Person(
                    personRegisterDto.getFirstName(),
                    personRegisterDto.getLastName(),
                    personRegisterDto.getDocument(),
                    personRegisterDto.getBirthDate(),
                    personRegisterDto.getEmail(),
                    LocalDateTime.now(),
                    personRegisterDto.getPhone()
                    )
            );
            personRegister.setId(person.getIdPerson());
        }
        return personRegister;
    }
}
