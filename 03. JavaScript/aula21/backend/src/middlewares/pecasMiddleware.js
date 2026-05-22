import { connection } from '../database/db.js'

export function validateCreatePeca(req, res, next){
    const {
        nome_peca,
        codigo_peca, 
        fornecedor, 
        quantidade, 
        preco_unitario, 
        estoque
    } = req.body

    if(
        !nome_peca || 
        nome_peca.trim().length < 3 || 
        nome_peca.trim().length > 100
    ){
        return res.status(400).send({response: "Nome inválido."})
    }

    if(
        !codigo_peca ||
        String(codigo_peca).trim().length !== 8 ||
        isNaN(Number(codigo_peca))
    ){
        return res.status(400).send({response: "Código de peça inválido."})
    }

    if(
        !fornecedor ||
        fornecedor.trim().length < 3 || 
        fornecedor.trim().length > 100
    ){
        return res.status(400).send({response: "Fornecedor inválido."})
    }

    if(
        !quantidade ||
        isNaN(Number(quantidade)) ||
        Number(quantidade) < 0
    ){
        return res.status(400).send({response: "Quantidade inválida."})
    }

    if(
        !preco_unitario ||
        isNaN(Number(preco_unitario)) ||
        Number(preco_unitario) < 0 
    ){
        return res.status(400).send({response: "Preço inválido."})
    }

    if(
        !estoque ||
        isNaN(Number(estoque)) ||
        Number(estoque) < 0
    ){
        return res.status(400).send({response: "Estoque inválido."})
    }
    connection.query(
        'select * from pecas where codigo_peca = ?',
        [codigo_peca],
        (err, results) => {

            if(err){
                return res.status(500).send({response: "Erro ao validar código."})
            }

            if(results.length > 0){
                return res.status(400).send({response: "Peça já existe (código)."})
            }

            connection.query('select * from pecas where nome_peca = ? and fornecedor = ?', [nome_peca, fornecedor], (err2, results2) => {
                if(err2){
                    return res.status(500).send({response: "Erro ao validar nome e fornecedor."})
                }

                if(results2.length > 0){
                    return res.status(400).send({response: "Peça já existe (nome + fornecedor)."})
                }
                
                next()

                }
            )
        }
    )
}