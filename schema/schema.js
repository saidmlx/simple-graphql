const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')

const Profesor = require('./Profesor')
const Curso = require('./Curso')

const resolvers = require('./resolvers')

const rootQueries =`
  union ResultadoBusqueda= Curso | Profesor

  type Query{
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String!):[ResultadoBusqueda]
  }
  type Mutation{
      profesorAdd(profesor: NewProfesor): Profesor
      profesorEdit(profesorId: Int! profesor: EditProfesor): Profesor
      profesorDelete(profesorId: Int): Profesor

      cursoAdd(curso: NewCurso): Curso
      cursoEdit(cursoId: Int! curso: EditCurso): Curso
      cursoDelete(cursoId: Int): Curso
  }
`



const schema = makeExecutableSchema ({
    typeDefs:[rootQueries, Profesor, Curso],
    resolvers
})


module.exports = schema;


