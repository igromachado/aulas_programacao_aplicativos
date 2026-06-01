import { connection } from '../database/db.js'

export function validarCadastrarFuncionario(req, res, next){
    const {
        nome,
        sobrenome,
        setor,
        funcao
    } = req.body

    if(
        !nome || 
        nome.trim().length < 3 || 
        nome.trim().length > 100
    ){
        return res.status(400).send({response: "Nome inválido."})
    }

    if(
        !sobrenome ||
        sobrenome.trim().length < 3 || 
        sobrenome.trim().length > 100
    ){
        return res.status(400).send({response: "Sobrenome inválido."})
    }

    if(
        !setor ||
        setor.trim().length < 3 || 
        setor.trim().length > 100
    ){
        return res.status(400).send({response: "Setor inválido."})
    }

    if(
        !funcao ||
        funcao.trim().length < 3 || 
        funcao.trim().length > 100
    ){
        return res.status(400).send({response: "Função inválida."})
    }
    next()
}

export function validarVerFuncionarioSetor(req, res, next){
    const { setor } = req.params

    if(setor.trim().length < 1){
        return res.status(404).send({response: 'Setor deve ser informado.'})
    }

    connection.query(
        `select setor from funcionarios where setor = ?`,
        [setor],
        (err, results) => {
            if(results[0] === undefined){
                return res.status(404).send({response: 'Setor inválido.'})
            }
            next()
        }
    )
}

export function validarAtualizarFuncionario(req, res, next){
    const { id } = req.params

    const {
        nome,
        sobrenome,
        setor,
        funcao
    } = req.body
    
    if(
        !nome || 
        nome.trim().length < 3 || 
        nome.trim().length > 100
    ){
        return res.status(400).send({response: "Nome inválido."})
    }

    if(
        !sobrenome ||
        sobrenome.trim().length < 3 || 
        sobrenome.trim().length > 100
    ){
        return res.status(400).send({response: "Sobrenome inválido."})
    }

    if(
        !setor ||
        setor.trim().length < 3 || 
        setor.trim().length > 100
    ){
        return res.status(400).send({response: "Setor inválido."})
    }

    if(
        !funcao ||
        funcao.trim().length < 3 || 
        funcao.trim().length > 100
    ){
        return res.status(400).send({response: "Função inválida."})
    }

    connection.query(
        `select id_funcionario from funcionarios where id_funcionario = ?`,
        [id],
        (err, results) => {
            if(results[0] === undefined){
                return res.status(404).send({response: 'Funcionário inválido.'})
            }
            next()
        }
    )
}

export function validarRemoverFuncionario(req, res, next){
    const { id } = req.params
    console.log(id)

    connection.query(
        `select id_funcionario from funcionarios where id_funcionario = ?`,
        [id],
        (err, results) => {
            if(results[0] === undefined){
                return res.status(404).send({response: 'Funcionário inválido.'})
            }
            next()
        }
    )
}