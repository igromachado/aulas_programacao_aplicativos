import express, {response, Router} from 'express'
import { atualizarOcorrência, registrarOcorrência, removerOcorrência, verOcorrência, verOcorrências } from '../controllers/achadosPerdidosController.js'
import { } from '../middlewares/achadosPerdidosMiddlewares.js'

const router = express.Router()

router 
    .post('/registrar', registrarOcorrência)
    .get('/', verOcorrências)
    .get('/:id', verOcorrência)
    .put('/:id', atualizarOcorrência)
    .delete('/:id', removerOcorrência)

export default router