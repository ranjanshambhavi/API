const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const fs = require("fs")
const generateEmployees = require('./emp')


// console.log(generateEmployees())
fs.writeFileSync(
    "./db.json",
    JSON.stringify({ employees: generateEmployees(500) })
  );

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 3000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
