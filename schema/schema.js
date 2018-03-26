const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')

const Profesor = require('./Profesor')
const Curso = require('./Curso')

const resolvers = require('./resolvers')

const rootQueries =`
type Query{
  cursos: [Curso]
  profesores: [Profesor]
  curso(id: Int): Curso
  profesor(id: Int): Profesor
}
`



const schema = makeExecutableSchema ({
    typeDefs:[rootQueries, Profesor, Curso],
    resolvers
})


module.exports = schema;


