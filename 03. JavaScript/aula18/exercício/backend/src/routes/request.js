import express, { response, Router } from 'express'
import {RequestController} from '../controllers/RequestController.js'

const router = express.Router()

router
    .get('/', RequestController.getRequests)
    .post('/', RequestController.createRequest)
    .get('/:id', RequestController.getRequest)
    .put('/:id', RequestController.updateRequest)
    .delete('/:id', RequestController.deleteRequest)

export default router