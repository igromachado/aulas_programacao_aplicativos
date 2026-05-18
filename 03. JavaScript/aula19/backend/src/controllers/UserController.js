import {connection} from '../database/db.js'

export const getPeople = (req, res) => {
    const users = connection.query('select * from user', (err, results) => {
        if(err){
            return res.status(500).send({response: 'Ocorreu algum erro'})
        }
        res.status(200).send(results)
    })
}

export const createUser = (req, res) => {
    const {name, email, password} = req.body

    try{
        connection.query('insert into user (name, email, password) values (?, ?, ?)',
            [name, email, password],
            (err, results) => {
                if (err){
                    return res.status(500).send({response: 'Ocorreu algum erro durante a inserção.'})
                }
            }
        )
        return res.status(201).send({response: 'Usuário cadastrado com sucesso!'})
    }

    catch{
        return res.status(500).send({response: 'Ocorreu algum erro.'})
    }
}

export const updateUser = (req, res) => {
    const {id} = req.params
    const {name, email, password} = req.body

    try{
        connection.query(
            'update user set name = ?, email = ?, password = ? where id = ?', 
            [name, email, password, id]
        )
        return res.status(200).send({response: 'Usuário atualizado com sucesso!'})
    }

    catch{
        return res.status(500).send({response: 'Ocorreu algum erro ao atualizar o usuário'})
    }
}

export const deleteUser = (req, res) => {
    const {id} = req.params

    try{
        connection.query('delete from user where id = ?', [id])
        return res.status(200).send({response: 'Usuário deletado com sucesso!'})
    }
    catch{
        return res.status(500).send({response: 'Ocorreu algum erro'})
    }
}