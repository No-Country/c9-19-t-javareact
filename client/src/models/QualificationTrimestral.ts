export class QualificationTrimestral {
    FIRST_TRIMESTER?: number;
    SECOND_TRIMESTER?: number;
    THIRD_TRIMESTER?: number;

    static voidItem(): QualificationTrimestral {
        const q = new QualificationTrimestral();
            q.FIRST_TRIMESTER = 0;
        return q;
    }
}