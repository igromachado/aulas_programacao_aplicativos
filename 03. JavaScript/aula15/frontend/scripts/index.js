const form = document.getElementById('form')
const formatt = document.getElementById('formatt')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json()
    console.log(data)

    carregarUsuarios()

    form.reset()
})

async function atualizarUsuario(id, nome, email, senha) {
    const idatt = document.getElementById('idatt')
    const nomeatt = document.getElementById('nomeatt')
    const emailatt = document.getElementById('emailatt')
    const senhaatt = document.getElementById('senhaatt')

    idatt.value = id
    nomeatt.value = nome
    emailatt.value = email
    senhaatt.value = senha

formatt.addEventListener('submit', async (e) => {
    e.preventDefault()
    const id = document.getElementById('idatt').value
    const nome = document.getElementById('nomeatt').value
    const email = document.getElementById('emailatt').value
    const senha = document.getElementById('senhaatt').value

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json()
    console.log(data)

    carregarUsuarios()

    form.reset()
})
}


async function carregarUsuarios() {
    const response = await fetch('http://localhost:8080/usuarios')
    const usuarios = await response.json()

    const tbody = document.getElementById('listaUsuarios')
    
    tbody.innerHTML = ""

    usuarios.forEach(usuario => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>
                <button onclick="deletarUsuario('${usuario.id}')">Deletar</button>
                <button onclick="atualizarUsuario('${usuario.id}', '${usuario.nome}', '${usuario.email}', '${usuario.senha}')">Atualizar</button>
            </td>
        `

        tbody.appendChild(tr)
    });
}

async function deletarUsuario(id){
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: `DELETE`
    })
    carregarUsuarios()
}

window.onload = () => {
    carregarUsuarios()
}