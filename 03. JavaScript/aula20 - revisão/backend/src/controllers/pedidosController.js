const pedidos = []

export function verPedidos(req, res){
    return res.status(200).send(pedidos)
}

export function verPedido(req, res){
    const {id} = req.params
    const pedidoEncontrado = pedidos.find((id) => id == pedidos.id)
    return res.status(200).send(pedidoEncontrado)

}

export function novoPedido(req, res){
    const {id, cliente, itens, status} = req.body

    if(!itens || !Array.isArray(itens)) {
        return res.status(400).send({error: "Itens inválidos"})
    }


    const pedido = pedidos.push({
        id,
        cliente,
        itens,
        status,
        total: itens.reduce((prev, acc) => {
            const total = acc.quantidade * acc.valor
            return prev += total
        }, 0)
    })

    return res.status(200).send({message: "Pedido cadastrado"})
}

export function atualizarPedido(req, res){
    const {id, cliente, itens, status} = req.body
}

export function deletarPedido(req, res){
    const {id} = req.params
}

