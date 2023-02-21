package tech.nocountry.goodlearnerbackend.model;

/**
 * Instrumentos de evaluación que tendrá el profesor para calificar al alumno.
 */
public enum TypeQualificationName {
    /**
     * Nota cierre de cada trimestre
     */
    TRIMESTRAL,
    /**
     * Evaluaciones parciales dentro de cada trimestre.
     */
    PARTIAL_EXAM,

    /**
     * Recuperatorio de los exámenes parciales dentro de cada trimestre.
     */
    RECOVERY_PARTIAL_EXAM,

    /**
     * Trabajo práctico individual
     */
    PRACTICE_WORK,

    /**
     * Evaluación conceptual, el docente podra tener varios factores.
     * Como la participación, el compromiso.
     */
    CONCEPTUAL,

    /**
     * Evaluación de una presentación/exposición oral tanto individual o grupal.
     */
    PRESENTATION,

    /**
     * Evaluación por trabajo Grupal
     */
    TEAM_WORK,

    /**
     * Evaluación diagnotica, suele ser al inicio de cada año escolar o contenido nuevo a trabajar.
     */
    DIAGNOSTIC_EXAM,

    /**
     * Evaluación de una materia previa.
     */
    RECOVERY_EXAM_SUBJECT
}
