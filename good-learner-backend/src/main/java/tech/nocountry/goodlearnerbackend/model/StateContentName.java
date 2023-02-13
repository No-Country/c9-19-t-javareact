package tech.nocountry.goodlearnerbackend.model;

/**
 * Estado de un contenido dentro del cronograma de una asignatura.
 */
public enum StateContentName {
    /**
     * Contenido actualmente trabajando.
     */
    IN_PROGRESS,

    /**
     * Contenido ya dictado.
     */
    DICTATION,

    /**
     * Contenido aún no dictado.
     */
    WITHOUT_DICTATING
}
