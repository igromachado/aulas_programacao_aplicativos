import { request } from "express"

const requests = []
let nextId = 1

export class RequestController{
    static getRequests(req, res){
        return res.status(200).send(requests)
    }

    static getRequest(req, res){
        const {id} = req.params
        const pedido = requests.find(request => request.id === Number(id))
        
        return res.status(200).send(pedido)
    }

    static updateRequest(req, res){
        const {id} = req.params
        const pedido = requests.find(request => request.id === Number(id))
        Object.assign(pedido, req.body)
        res.status(200).send({response: "Pedido atualizado!"})
    }

    static deleteRequest(req, res){
        const index = requests.findIndex(r => r.id === Number(req.params.id))
        requests.splice(index, 1)
        res.status(200).send({response: "Pedido removido!"})
    }

    static createRequest(req, res){
        const {cliente, itens, status} = req.body
        const pedido = {
            id: nextId++,
            cliente,
            itens,
            status,
            total: itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0)
        }
        requests.push(pedido)
        res.status(200).send({response: "Pedido cadastrado!"})
    }
}