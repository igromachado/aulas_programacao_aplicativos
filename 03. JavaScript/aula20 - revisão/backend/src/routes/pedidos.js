import express from 'express'
import { atualizarPedido, deletarPedido, novoPedido, verPedido, verPedidos } from '../controllers/pedidosController.js'

const router = express.Router()

router
    .get('/', verPedidos)
    .get('/:id', verPedido)
    .post('/', novoPedido)
    .put('/:id', atualizarPedido)
    .delete('/:id', deletarPedido)

export default router