const Curso = require('../models/Curso')
const Profesor = require('../models/Profesor')


const resolvers = {
  Query:{
    cursos: () => Curso.query().eager('[profesor,comentarios]'),
    profesores: () => Profesor.query().eager('cursos'),
    curso: (rootValue,args) => Curso.query().eager('[profesor,comentarios]').findById(args.id),
    profesor: (rootValue,args) => Profesor.query().eager('cursos').findById(args.id),
    buscar:(_,args) => {
      return [
        Curso.query().findById(1),
        Profesor.query().findById(2)
      ]
    }
  },
  ResultadoBusqueda:{
    __resolveType:(obj)=>{
      if(obj.titulo){
        return 'Curso'
      }else{
        return 'Profesor'
      }
    }
  },
  Mutation: {
    profesorAdd: (_, args)=> {
      return Profesor.query().insert(args.profesor)
    },
    profesorEdit: (_, args)=> {
      return Profesor.query().patchAndFetchById(args.profesorId, args.profesor)
    },
    profesorDelete: (_, args)=> {
      console.log(args)
      return Profesor.query().findById(args.profesorId)
      .then((profesor) =>{
        return Profesor.query().deleteById(args.profesorId)
        .then((filasBorradas) => {
          if(filasBorradas > 0){
            return profesor
          }else{
            throw new Error(` No se pudo eliminar el profesor ${args.profesorId}`)
          }
        })
      })
    },

    cursoAdd: (_, args)=> {
      return Curso.query().insert(args.curso)
    },
    cursoEdit: (_, args)=> {
      return Curso.query().patchAndFetchById(args.cursoId, args.curso)
    },
    cursoDelete: (_, args)=> {
      return Curso.query().findById(args.cursoId)
      .then((curso) =>{
        return Curso.query().deleteById(args.cursoId)
        .then(() => curso)
      })
    }


  }
}

  module.exports = resolvers