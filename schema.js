const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

const casual = require('casual')

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
    cursos: () =>{
      return [
        {
          id: 1,
          titulo: "Spring framework",
          descripcion: "Learn full description about spring",
        },
        {
          id: 2,
          titulo: "Cordoba",
          descripcion: "Cordoba server",
        }
      ]
    }
  },
  Curso:{
    profesor: () =>{
      return {
        nombre: "Pablo",
        nacionalidad: 'Mexicano'
      }
    },
    comentarios: () =>{
      return [
        {
          
            id: "1",
            nombre: "Alfa"
        }
      ]
    }
  }

}

const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
})

addMockFunctionsToSchema({
  schema,
  mocks: {
    Curso: () =>{
      return {
        id: 1,
        titulo: casual.sentence,
        descripcion: casual.sentences(2),
      }
    },
    Profesor:() =>{
      return {
        nombre: casual.name,
        nacionalidad: casual.country
      }
    }
  },
  preserveResolvers:true
})

module.exports = schema;


