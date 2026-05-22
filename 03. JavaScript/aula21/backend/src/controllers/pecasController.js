import { connection } from "../database/db.js"; 

export const createPeca = (req, res) => {
    const {
        nome_peca,
        codigo_peca, 
        fornecedor, 
        quantidade, 
        preco_unitario, 
        estoque
    } = req.body

    try{
        connection.query(
            `insert into pecas (
                nome_peca,
                codigo_peca,
                fornecedor,
                quantidade,
                preco_unitario,
                estoque
            ) values (?, ?, ?, ?, ?, ?)`,
            [
                nome_peca,
                codigo_peca,
                fornecedor,
                quantidade,
                preco_unitario,
                estoque
            ],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Ocorreu algum erro durante a inserção.'
                    })
                }

                return res.status(201).send({
                    response: 'Peça cadastrada com sucesso!'
                })
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Ocorreu algum erro.'
        })
    }
}

export const getPeca = (req, res) => {
    const {id} = req.params

    connection.query(
        'select * from pecas where id = ?',
        [id],
        (err, results) => {
            if(err){
                return res.status(500).send({
                    response: 'Ocorreu algum erro!'
                })
            }

            if(results.length === 0){
                return res.status(404).send({response: 'Peça não encontrada'})
            }
            return res.status(200).send(results[0])
        }
    )
}

export const getPecas = (req, res) => {
    connection.query(
        'select * from pecas',
        (err, results) => {
            if(err){
                return res.status(500).send({
                    response: 'Ocorreu algum erro!'
                })
            }

            return res.status(200).send(results)
        }
    )
}

export const updatePeca = (req, res) => {
    const {id} = req.params

    const {
        nome_peca,
        codigo_peca, 
        fornecedor, 
        quantidade, 
        preco_unitario, 
        estoque
    } = req.body

    try{
        connection.query(
            `update pecas set
                nome_peca = ?,
                codigo_peca = ?,
                fornecedor = ?,
                quantidade = ?,
                preco_unitario = ?,
                estoque = ?
            where id = ?`,
            [
                nome_peca,
                codigo_peca,
                fornecedor,
                quantidade,
                preco_unitario,
                estoque,
                id
            ],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Ocorreu algum erro ao atualizar a peça.'
                    })
                }

                return res.status(200).send({
                    response: 'Peça atualizada com sucesso!'
                })
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Ocorreu algum erro ao atualizar a peça.'
        })
    }
}

export const deletePeca = (req, res) => {
    const {id} = req.params

    try{
        connection.query(
            'delete from pecas where id = ?',
            [id],
            (err, results) => {
                if(err){
                    return res.status(500).send({
                        response: 'Ocorreu algum erro!'
                    })
                }

                return res.status(200).send({
                    response: 'Peça deletada com sucesso!'
                })
            }
        )
    }

    catch{
        return res.status(500).send({
            response: 'Ocorreu algum erro!'
        })
    }
}