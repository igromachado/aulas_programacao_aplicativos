import express from 'express'
import achadosPerdidos from './achadosPerdidos.js'

export default function(app){
    app.use('/achadosperdidos', achadosPerdidos)
}