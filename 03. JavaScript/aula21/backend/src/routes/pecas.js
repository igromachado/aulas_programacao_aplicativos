import express, {response, Router} from 'express'
import {createPeca, getPeca, getPecas, updatePeca, deletePeca} from '../controllers/pecasController.js'
import { validateCreatePeca } from '../middlewares/pecasMiddleware.js'

const router = express.Router()

console.log('pecas.js carregado!')

router 
    .post('/register', validateCreatePeca, createPeca)
    .get('/', getPecas)
    .get('/:id', getPeca)
    .put('/:id', updatePeca)
    .delete('/:id', deletePeca)

export default router