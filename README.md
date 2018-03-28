
# Simple Graphql example

It's a litle example abaut how Graphql work


1. Creamos el proyecto

```terminal
$yarn init -y
```

2. Instalamos dependencias

```terminal
$ yarn add express
$ yarn add body-parser
$ yarn add graphql graphql-server-express graphql-tools 
$ yarn add nodedemon -D
$ yarn add casual
```

3. Agregamos el servidor (version inicial)

```javascript
const express =require('express')
const bodyparser = require('body-parser')

const app = express()

const PORT = 7070

app.listen(PORT,() => {
  console.log("Server startted OK")    
})

``` 
