const form = document.getElementById('form')
const formatt = document.getElementById('formatt')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const produto = document.getElementById('produto').value
    const categoria = document.getElementById('categoria').value
    const quantidade = document.getElementById('quantidade').value
    const preco = document.getElementById('preco').value
    const data = document.getElementById('data').value
    const tipo_pagamento = document.getElementById('tipo_pagamento').value
    const vendedor = document.getElementById('vendedor').value

    const response = await fetch('http://localhost:8080/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_produto: produto,
            categoria_produto: categoria,
            quantidade_vendida: quantidade,
            preco_produto: preco,
            data_venda: data,
            tipo_pagamento: tipo_pagamento,
            vendedor: vendedor
        })
    })

    const resultado = await response.json()
    console.log(resultado)

    carregarVendas()

    form.reset()
})

async function atualizarVenda(id, produto, categoria, quantidade, preco, data, tipo_pagamento, vendedor) {
    document.getElementById('idatt').value = id
    document.getElementById('produtoatt').value = produto
    document.getElementById('categoriaatt').value = categoria
    document.getElementById('quantidadeatt').value = quantidade
    document.getElementById('precoatt').value = preco
    document.getElementById('dataatt').value = data.split('T')[0]
    document.getElementById('tipo_pagamentoatt').value = tipo_pagamento
    document.getElementById('vendedoratt').value = vendedor
}   

formatt.addEventListener('submit', async (e) => {
    e.preventDefault()
    const id = document.getElementById('idatt').value
    const produto = document.getElementById('produtoatt').value
    const categoria = document.getElementById('categoriaatt').value
    const quantidade = document.getElementById('quantidadeatt').value
    const preco = document.getElementById('precoatt').value
    const data = document.getElementById('dataatt').value
    const tipo_pagamento = document.getElementById('tipo_pagamentoatt').value
    const vendedor = document.getElementById('vendedoratt').value

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_produto: produto,
            categoria_produto: categoria,
            quantidade_vendida: quantidade,
            preco_produto: preco,
            data_venda: data,
            tipo_pagamento,
            vendedor
        })
    })

    const resultado = await response.json()
    console.log(resultado)

    carregarVendas()

    formatt.reset()
})

async function carregarVendas() {
    const response = await fetch('http://localhost:8080/vendas');
    const vendas = await response.json();

    const tbody = document.getElementById('listaVendas');
    tbody.innerHTML = "";

    vendas.forEach(venda => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${venda.nome_produto}</td>
            <td>${venda.categoria_produto}</td>
            <td>${venda.quantidade_vendida}</td>
            <td>${Number(venda.preco_produto).toFixed(2)}</td>
            <td>${Number(venda.valor_total).toFixed(2)}</td>
            <td>${new Date(venda.data_venda).toLocaleDateString('pt-BR')}</td>
            <td>${venda.tipo_pagamento}</td>
            <td>${venda.vendedor}</td>
            <td>
                <button onclick="deletarVenda(${venda.id_venda})">Deletar</button>
                <button onclick="atualizarVenda(
                    '${venda.id_venda}',
                    '${venda.nome_produto}',
                    '${venda.categoria_produto}',
                    '${venda.quantidade_vendida}',
                    '${venda.preco_produto}',
                    '${venda.data_venda}',
                    '${venda.tipo_pagamento}',
                    '${venda.vendedor}'
                )">Atualizar</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

async function deletarVenda(id){
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: `DELETE`
    })
    carregarVendas()
}

window.onload = () => {
    carregarVendas()
}