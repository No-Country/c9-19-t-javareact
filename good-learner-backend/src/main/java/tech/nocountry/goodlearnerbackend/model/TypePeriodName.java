package tech.nocountry.goodlearnerbackend.model;

/**
 * Periodo en el que se encuentran evaluando
 */
public enum TypePeriodName {
    /**
     * Primer Trimestre
     */
    FIRST_TRIMESTER,
    SECOND_TRIMESTER,
    THIRD_TRIMESTER,

    /**
     * Periodo Final.
     * Suele ser una nota, ques determinada
     * por el promedio de las tres notas trimestrales
     */
    ANNUAL,

    /**
     * Si el alumno, no aprueba la materia, esta pasa a ser Previa,
     * Debera rendir en el Periodo de Previa
     */
    PREVIOUS
}
