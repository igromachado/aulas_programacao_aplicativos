const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
    ]

//usuários ativos
users_active = users.filter((p) => p.active == true)

//usuários inativos
users_inactive = users.filter((p) => p.active == false)

//apenas devs
users_dev = users.filter((p) => p.role == "dev")

//apenas designers
users_designer = users.filter((p) => p.role == 'designer')

//apenas managers
users_manager = users.filter((p) => p.role == 'manager')

//apenas analistas de dados
users_data = users.filter((p) => p.role == 'data_analyst')

//salário maior que 5000
users_5000 = users.filter((p) => p.salary > 5000)

//salário menor que 4000
users_4000 = users.filter((p) => p.salary < 4000)

//maiores que 30
users_30 = users.filter((p) => p.age > 30)

//menores que 25
users_25 = users.filter((p) => p.age < 25)

//analistas de dados que estão ativos
users_data_active = users.filter((p) => p.role == 'data_analyst' & p.active == true)

//devs com salário maior que 4000
users_dev_4000 = users.filter((p) => p.role == 'dev' & p.salary > 4000)

//managers com mais de 30 anos
users_manager_30 = users.filter((p) => p.role == 'manager' & p.age > 30)

const lista = [
    { title: 'Menores que 25', users: users_25 },
    { title: 'Maiores que 30', users: users_30 },
    { title: 'Salário Menor que 4000', users: users_4000 },
    { title: 'Salário Maior que 5000', users: users_5000 },
    { title: 'Usuários Ativos', users: users_active },
    { title: 'Analistas de Dados', users: users_data },
    { title: 'Analistas de Dados Ativos', users: users_data_active },
    { title: 'Designers', users: users_designer },
    { title: 'Devs', users: users_dev },
    { title: 'Devs com Salário Maior que 4000', users: users_dev_4000 },
    { title: 'Usuários Inativos', users: users_inactive },
    { title: 'Managers', users: users_manager },
    { title: 'Managers com Mais de 30', users: users_manager_30 }
]

let container = document.getElementById('container')

function createCard(user){
    div = document.createElement('div')
    span = document.createElement('span')
    span.innerHTML = `${user.name} - ${user.age} anos`
    div.appendChild(span)
    return div
}

function createTitle(titleText){
    title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = titleText
    return title
}

lista.forEach(array => {

    const title = createTitle(array.title)
    container.appendChild(title)

    array.users.forEach(user => {
        const card = createCard(user)
        container.appendChild(card)
    }) 
})