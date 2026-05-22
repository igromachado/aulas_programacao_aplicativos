import express from 'express'
import initRoutes from './src/routes/routes.js'

const app = express()

app.use(express.json())

const port = 8080

app.get('/', (req, res) => {
    return res.send({response: 'A API está rodando!'})
})

initRoutes(app)

app.listen(port, () => {
    console.log('O servidor está rodando em http://localhost:8080')
})