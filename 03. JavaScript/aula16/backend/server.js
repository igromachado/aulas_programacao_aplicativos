const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const port = 8080

app.use(express.json())

app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: 'root',
    password: 'marcus',
    host: 'localhost',
    database: 'produtos',
    port: 3306
})

if(connection){
    console.log('Banco de dados conectado!')
}

app.get('/', (req, res) => {
    return res.send('Servidor funcionando corretamente!')
})

app.get('/vendas', async (req, res) => {
    connection.query('SELECT * FROM vendas', (err, results) =>{
        if(err){
            return
        }
        res.status(200).send(results)
    })
})

app.get('/vendas/:id', (req, res) => {
    const {id} = req.params
    connection.query('SELECT * FROM vendas WHERE id_venda = ?', 
        [id], 
        (err, results) =>{
            if(err){
                return
            }
            return res.status(200).send(results[0])
        }
    )
})

app.post('/cadastro', (req, res) => {
    const {
        nome_produto,
        categoria_produto,
        quantidade_vendida, 
        preco_produto,
        data_venda, 
        tipo_pagamento, 
        vendedor
    } = req.body

    connection.query(
        `INSERT INTO vendas 
        (nome_produto, categoria_produto, quantidade_vendida, preco_produto, data_venda, tipo_pagamento, vendedor) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            nome_produto,
            categoria_produto,
            quantidade_vendida,
            preco_produto,
            data_venda,
            tipo_pagamento,
            vendedor
        ],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ error: err })
            }

            return res.status(201).send({ response: "Venda cadastrada com sucesso!" })
        }
    )
})

app.delete('/deletar/:id', (req, res) => {
    const {id} = req.params
    try{
        connection.query('DELETE FROM vendas WHERE id_venda = ?', [id])
        return res.status(200).send({message: 'Venda deletada com sucesso!'})
    }
    catch(e){
        return res.status(500).send({error: e})
    }
})

app.put('/atualizar/:id', (req,res) => {
    const {id} = req.params
    const {
        nome_produto,
        categoria_produto,
        quantidade_vendida,
        preco_produto,
        data_venda,
        tipo_pagamento,
        vendedor
    } = req.body
    try{
        connection.query(
            `UPDATE vendas 
            SET nome_produto = ?, 
                categoria_produto = ?, 
                quantidade_vendida = ?, 
                preco_produto = ?, 
                data_venda = ?, 
                tipo_pagamento = ?, 
                vendedor = ? 
            WHERE id_venda = ?`, 
            [
                nome_produto,
                categoria_produto,
                quantidade_vendida,
                preco_produto,
                data_venda,
                tipo_pagamento,
                vendedor,
                id]
        )
        return res.status(200).send({message: 'Venda atualizada com sucesso!'})
    }
    catch{
        return res.status(500).send({error: 'Ocorreu um erro ao atualizar sua venda'})
    }
})

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:8080')
})