import { connection } from "../database/db.js"

export const registrarOcorrência = (req, res) => {
    const {
        descricao,
        local_encontro,
        data_encontro,
        status_objeto
    } = req.body

    if (!descricao) {
        return res.status(400).send({
            response: 'Descrição é obrigatória.'
        })
    }

    if (!local_encontro) {
        return res.status(400).send({
            response: 'Local do encontro é obrigatório.'
        })
    }

    if (!data_encontro) {
        return res.status(400).send({
            response: 'Data do encontro é obrigatória.'
        })
    }

    const dataAtual = new Date().toISOString().split('T')[0]

    if (data_encontro > dataAtual) {
        return res.status(400).json({
            erro: 'A data não pode ser futura.'
        })
    }

    try{
        connection.query(
            `insert into ocorrencia(
                descricao,
                local_encontro,
                data_encontro,
                status_objeto
            ) values (?, ?, ?, ?)`,
            [
                descricao,
                local_encontro,
                data_encontro,
                status_objeto
            ],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Erro no servidor.'
                    })
                }

                return res.status(201).send({
                    response: 'Ocorrência cadastrada com sucesso!'
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

export const verOcorrência = (req, res) => {
    const { id } = req.params

    connection.query(
        `select * from ocorrencia where id = ?`, [id],
        (err, results) => {
            if(err){
                return res.status(500).send({
                    response: 'Erro no servidor.'
                })
            }

            if(results.length === 0){
                return res.status(404).send({
                    response: 'Ocorrência não encontrada.'
                })
            }
            return res.status(200).send(results[0])
        }
    )
}

export const verOcorrências = (req, res) => {
    connection.query(
        `select * from ocorrencia`,
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

export const atualizarOcorrência = (req, res) => {
    const { id } = req.params

    const {
        descricao,
        local_encontro,
        data_encontro,
        status_objeto
    } = req.body

    try{
        connection.query(
            `select status_objeto from ocorrencia where id = ?`,
            [id],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Erro no servidor.'
                    })
                }

                if(results.length === 0){
                    return res.status(404).send({
                        response: 'Ocorrência não encontrada.'
                    })
                }

                const statusAtual = results[0].status_objeto

                if(
                    statusAtual === 'Entregue' &&
                    status_objeto === 'Aguardando retirada'
                ){
                    return res.status(400).send({
                        response: 'Um objeto entregue não pode voltar ao status anterior.'
                    })
                }

                connection.query(
                    `update ocorrencia set
                        descricao = ?,
                        local_encontro = ?,
                        data_encontro = ?,
                        status_objeto = ?
                    where id = ?`,
                    [
                        descricao,
                        local_encontro,
                        data_encontro,
                        status_objeto,
                        id
                    ],
                    (err, results) => {
                        if(err){
                            return res.status(500).send({
                                response: 'Erro no servidor.'
                            })
                        }

                        return res.status(200).send({
                            response: 'Ocorrência atualizada com sucesso!'
                        })
                    }
                )
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Erro no servidor.'
        })
    }
}

export const removerOcorrência = (req, res) => {
    const { id } = req.params

    connection.query(
        `delete from ocorrencia where id = ?`,
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send({
                    response: 'Erro no servidor.'
                })
            }

            if (results.affectedRows === 0) {
                return res.status(404).send({
                    response: 'Ocorrência não encontrada.'
                })
            }

            return res.status(200).send({
                response: 'Ocorrência removida com sucesso!'
            })
        }
    )
}