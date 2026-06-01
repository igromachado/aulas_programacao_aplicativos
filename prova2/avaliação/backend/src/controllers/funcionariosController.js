import { connection } from "../database/db.js"; 

export const cadastrarFuncionario = (req, res) => {
    const {
        nome,
        sobrenome, 
        setor, 
        funcao
    } = req.body

    try{
        connection.query(
            `insert into funcionarios (
                nome,
                sobrenome, 
                setor, 
                funcao
            ) values (?, ?, ?, ?)`,
            [
                nome,
                sobrenome, 
                setor, 
                funcao
            ],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Erro no servidor.'
                    })
                }

                return res.status(201).send({
                    response: 'Funcionário cadastrado!'
                })
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Erro no servidor.'
        })
    }
}

export const verFuncionarioSetor = (req, res) => {
    const { setor } = req.params

    connection.query(
        'select * from funcionarios where setor = ?',
        [setor],
        (err, results) => {
            if(err){
                return res.status(500).send({
                    response: 'Erro no servidor.'
                })
            }
            return res.status(200).send(results)
        }
    )
}

export const verFuncionarios = (req, res) => {
    connection.query(
        'select * from funcionarios',
        (err, results) => {
            if(err){
                return res.status(500).send({
                    response: 'Erro no servidor.'
                })
            }
            return res.status(200).send(results)
        }
    )
}

export const atualizarFuncionario = (req, res) => {
    const { id } = req.params

    const {
        nome,
        sobrenome, 
        setor, 
        funcao
    } = req.body

    try{
        connection.query(
            `update funcionarios set
                nome = ?,
                sobrenome = ?, 
                setor = ?, 
                funcao = ?
            where id_funcionario = ?`,
            [
                nome,
                sobrenome,
                setor,
                funcao,
                id
            ],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Erro no servidor.'
                    })
                }

                return res.status(200).send({
                    response: 'Funcionário atualizado!'
                })
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Erro no servidor.'
        })
    }
}

export const removerFuncionario = (req, res) => {
    const { id } = req.params

    try{
        connection.query(
            'delete from funcionarios where id_funcionario = ?',
            [id],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Erro no servidor.'
                    })
                }

                return res.status(200).send({
                    response: 'Funcionário removido!'
                })
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Erro no servidor.'
        })
    }
}