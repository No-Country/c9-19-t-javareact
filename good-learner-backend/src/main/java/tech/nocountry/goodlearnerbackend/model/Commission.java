@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "commission")
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_commission", nullable = false)
    private Long commissionId;

    @Column(name = "course", nullable = false)
    private String course;

    @Column(name = "division", nullable = false)
    private String division;

    @Column(name = "school_year", nullable = false)
    private Int schoolYear;

    @ManyToOne
    @JoinColumn(name = "shift_id")
    private Shift shift;

    @OneToMany
    @JoinColumn(name = "student_id")
    private Student student




}