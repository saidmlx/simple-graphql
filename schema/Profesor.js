module.exports =`
#Profesores y sus cursos
type Profesor{
    id: ID!
    nombre: String
    nacionalidad: String
    genero: Genero
    cursos: [Curso]
}



enum Genero{
    MASCULINO
    FEMENINO
}


`