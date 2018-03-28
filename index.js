

const express =require('express')
const bodyparser = require('body-parser')

const { graphqlExpress, graphiqlExpress} = require('graphql-server-express')
const schema = require('./schema/schema')

require('./db/setup.js')


const app = express()

app.use('/graphql',
  bodyparser.json(),
  graphqlExpress({
    schema,
    formatError:(error) => {
      return {
        code:234,
        name: error.name,
        message: error.message
      }
    }
  })
)

app.use('/graphiql',
  graphiqlExpress({
    endpointURL:'graphql'
  })
)

const PORT = 7070

app.listen(PORT,() => {
  console.log("Server startted OK")    
})

