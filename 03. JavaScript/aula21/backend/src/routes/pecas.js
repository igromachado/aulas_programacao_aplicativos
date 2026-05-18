import express, {response, Router} from 'express'
import {createPeca, getPeca, getPecas, updatePeca, deletePeca} from '../controllers/pecasController.js'

const router = express.Router()

router 
    .post('/register', createPeca)
    .get('/:id', getPeca)
    .get('/', getPecas)
    .put('/:id', updatePeca)
    .delete('/:id', deletePeca)

export default router