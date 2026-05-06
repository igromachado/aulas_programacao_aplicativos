import express from 'express'
import request from './request.js'

export default function(app){
    app
    .use(express.json())
    .use('/requests', request)
}