import express, { response, Router } from 'express'
import {getPeople, createUser, updateUser, deleteUser} from '../controllers/UserController.js'

const router = express.Router()

router
    .get('/users', getPeople)
    .post('/register', createUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)

export default router