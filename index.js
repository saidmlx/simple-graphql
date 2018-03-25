

const express =require('express')
const bodyparser = require('body-parser')

const { graphqlExpress, graphiqlExpress} = require('graphql-server-express')
const schema = require('./schema')

require('./db/setup.js')


const app = express()

app.use('/graphql',
  bodyparser.json(),
  graphqlExpress({schema})
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

