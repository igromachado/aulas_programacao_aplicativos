let data = []

let currentId = null

const server = 'http://localhost:8080'

const form = document.getElementById('formulario')

async function fetchData() {

    try {

        const response = await fetch(`${server}/pecas`)

        data = await response.json()

        setTableData()

    } catch (error) {

        console.log(error)

    }

}

function setTableData() {

    const table = document.getElementById('table-data')

    table.innerHTML = ''

    data.forEach((e) => {

        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
            <td>${e.quantidade}</td>
            <td>${e.preco_unitario}</td>
            <td>${e.estoque}</td>

            <td>
                <button onclick="editPeca(${e.id})">
                    Editar
                </button>
                
                <button onclick="deletePeca(${e.id})">
                    Deletar
                </button>
            </td>
        `

        table.appendChild(tr)

    })

}

form.addEventListener('submit', async (e) => {

    e.preventDefault()

    const nome = document.getElementById('nome').value
    const codigo = document.getElementById('codigo').value
    const fornecedor = document.getElementById('fornecedor').value
    const quantidade = document.getElementById('quantidade').value
    const preco_unitario = document.getElementById('preco_unitario').value
    const estoque = document.getElementById('estoque').value

    const dataToSend = {
        nome_peca: nome,
        codigo_peca: codigo,
        fornecedor: fornecedor,
        quantidade: quantidade,
        preco_unitario: preco_unitario,
        estoque: estoque
    }

    try {

        if (currentId === null) {

            await fetch(`${server}/pecas/register`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(dataToSend)
            })

        } else {

            await fetch(`${server}/pecas/${currentId}`, {
                method: 'PUT',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(dataToSend)
            })

            currentId = null
        }

        form.reset()

        fetchData()

    } catch (error) {

        console.log(error)

    }

})

function editPeca(id) {

    const peca = data.find((e) => e.id === id)

    currentId = id

    document.getElementById('nome').value = peca.nome_peca
    document.getElementById('codigo').value = peca.codigo_peca
    document.getElementById('fornecedor').value = peca.fornecedor
    document.getElementById('quantidade').value = peca.quantidade
    document.getElementById('preco_unitario').value = peca.preco_unitario
    document.getElementById('estoque').value = peca.estoque

}

async function deletePeca(id) {
    
    try {

        await fetch(`${server}/pecas/${id}`, {
            method: 'DELETE'
        })

        fetchData()

    } catch (error) {

        console.log(error)

    }

}

addEventListener('load', () => {

    fetchData()

})