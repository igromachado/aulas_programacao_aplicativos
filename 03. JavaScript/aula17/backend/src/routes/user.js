import express, { response, Router } from 'express'

const router = express.Router()

const users = [
    { name: 'Diego', lastname: '' },
    { name: 'Erish', lastname: '' },
    { name: 'Leticia', lastname: '' },
    { name: 'Luan', lastname: '' }
]

router
    .get('/users', (req, res) => {
        res.send(users)
    })
    .post('/users', (req, res) => {
        const {name, lastname} = req.body
        try{
            users.push({name, lastname})
            return res.status(200).send({response: `Usuário ${name} ${lastname} registrado com sucesso`})
        }
        catch{
            return res.status(500).send({response: 'Erro ao registrar usuário'})
        }
    })
    .delete('/delete/:index', (req, res) => {
        const index = parseInt(req.params.index)
        try{
            users.splice(index, 1)
            return res.status(200).send({response: `Usuário deletado com sucesso`})
        }
        catch{
            return res.status(500).send({response: `Erro ao deletar usuário`})
        }
    })
    .put('/update/:index', (req, res) => {
        const index = parseInt(req.params.index)
        const {name, lastname} = req.body
        try{
            users[index] = {name, lastname}
            return res.status(200).send({response: `Usuário ${name} ${lastname} atualizado com sucesso`})
        }
        catch{
            return res.status(500).send({response: `Erro ao atualizar usuário`})
        }
    })

export default router