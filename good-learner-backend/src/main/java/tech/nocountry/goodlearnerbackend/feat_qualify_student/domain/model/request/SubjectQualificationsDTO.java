package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.request;

        import lombok.*;
        import tech.nocountry.goodlearnerbackend.model.PeriodName;
        import tech.nocountry.goodlearnerbackend.model.SubjectName;
        import tech.nocountry.goodlearnerbackend.model.TypeQualificationName;

        import java.util.Map;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class SubjectQualificationsDTO {
    private Long idPerson;
    private String firstName;
    private  String lastName;
    private  String document;
    private Map<PeriodName, Integer> qualifications;
}
