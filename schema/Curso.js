module.exports =`
# Cusrsos actuales
type Curso {
    id: ID!
    # Titulo o descripcion corta del curso
    titulo: String
    # Descripcion larga del curso
    descripcion: String
    # Profesor que ha impartido un curso
    profesor: Profesor
    # Que tanto ha gustado un curso
    rating: Float @deprecated(reason: "Ya no se califican por clics si no por numero de visitas")
    # Comentarios hechos a un curso
    comentarios: [Comentario]
}


type Comentario{
    id: ID!
    nombre: String
    cuerpo: String
}

`