@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Student extends Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @Column(name = "grade", nullable = false)
    private String grade;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "Student")
    private List<Person> students;

}