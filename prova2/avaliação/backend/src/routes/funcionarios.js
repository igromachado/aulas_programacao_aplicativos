import express, { response, Router } from 'express'
import { cadastrarFuncionario, verFuncionarioSetor, verFuncionarios, atualizarFuncionario, removerFuncionario } from '../controllers/funcionariosController.js'
import { validarAtualizarFuncionario, validarCadastrarFuncionario, validarRemoverFuncionario, validarVerFuncionarioSetor } from '../middlewares/funcionariosMiddleware.js'

const router = express.Router()

router 
    .post('/', validarCadastrarFuncionario,cadastrarFuncionario)
    .get('/:setor', validarVerFuncionarioSetor, verFuncionarioSetor)
    .get('/', verFuncionarios)
    .put('/:id', validarAtualizarFuncionario, atualizarFuncionario)
    .delete('/:id', validarRemoverFuncionario, removerFuncionario)

export default router