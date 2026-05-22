import express from 'express'
import pecas from './pecas.js'

export default function(app){
    app.use('/pecas', pecas)
}