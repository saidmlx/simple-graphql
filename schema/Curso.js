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


input NewCurso {
    titulo: String!
    # Descripcion larga del curso
    descripcion: String
    # Profesor que ha impartido un curso
    profesor: NewProfesor
    # Comentarios hechos a un curso
    comentarios: [NewComentario]
}

input EditCurso {
    titulo: String!
    # Descripcion larga del curso
    descripcion: String
    # Profesor que ha impartido un curso
    profesor: EditProfesor
    # Comentarios hechos a un curso
    comentarios: [EditComentario]
}

type Comentario{
    id: ID!
    nombre: String
    cuerpo: String
}

input NewComentario{
    id: ID!
    nombre: String
    cuerpo: String
}

input EditComentario{
    id: ID!
    nombre: String
    cuerpo: String
}
`