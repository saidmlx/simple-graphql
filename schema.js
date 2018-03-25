const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')

const Curso = require('./models/Curso')
const Profesor = require('./models/Profesor')

const typeDefs =`
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
#Profesores y sus cursos
type Profesor{
    id: ID!
    nombre: String
    nacionalidad: String
    genero: Genero
    cursos: [Curso]
}

type Comentario{
    id: ID!
    nombre: String
    cuerpo: String
}


enum Genero{
    MASCULINO
    FEMENINO
}


type Query{
  cursos: [Curso]
  profesores: [Profesor]
  curso(id: Int): Curso
  profesor(id: Int): Profesor
  
}
`

const resolvers = {
  Query:{
    cursos: () => Curso.query().eager('[profesor,comentarios]'),
    profesores: () => Profesor.query().eager('cursos'),
    curso: (rootValue,args) => Curso.query().eager('[profesor,comentarios]').findById(args.id),
    profesor: (rootValue,args) => Profesor.query().eager('cursos').findById(args.id),

  }
}

const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
})


module.exports = schema;


