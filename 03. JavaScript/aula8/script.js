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

// ================================================================================ MAP ================================================================================
const mapUser = users.map((user) => {
    return{name: user.name, role: user.role}
})

console.log(mapUser)

const mapNames = users.map((user) => {
    return{name: user.name}
})

console.log(mapNames)

const mapUpNames = users.map((user) => {
    return{name: user.name.toUpperCase()}
})

console.log(mapUpNames)

const salaryAnnual = users.map((user) => {
    return "Salário anual: " + user.salary * 12
})

console.log(salaryAnnual)

const NameAge = users.map((user) => {
    return{name: user.name, age: user.age}
})

console.log(NameAge)

const NameSalary = users.map((user) => {
    return{name: user.name, salary: "R$" + user.salary + ",00"}
})

console.log(NameSalary)

const mapClass = users.map((user) => {
    if(user.age <= 24) {
        return {...user, Class: "Junior"}
    }
    else if(user.age <=30) {
        return {...user, Class: "Pleno"}
    }
    else{
        return {...user, Class: "Senior"}
    }
})

console.log(mapClass)

const salaryClass = users.map((user) => {
    if (user.salary <= 3000) {
        return {...user, SalClass: "Baixo"}
    }
    else if (user.salary <= 7000) {
        return {...user, SalClass: "Médio"}
    }
    else {
        return {...user, SalClass: "Alto"}
    }
})

console.log(salaryClass)

const IdNameActive = users.map((user) => {
    return {name: user.name, ID: user.id, Active: user.active}
})

console.log(IdNameActive)

// ================================================================================ REDUCE ================================================================================
const avgSalary = users.reduce((acc, user) => {
    return acc + user.salary / users.length
}, 0)

console.log(avgSalary.toFixed(2)) //arredonda o valor por 2

const avgAge = users.reduce((acc, user) => {
    return acc + user.age / users.length
}, 0)

console.log(avgAge.toFixed(2))

const countActive = users.reduce((acc,user) => {
    if(user.active == true){
        acc += 1
    }
    return acc
}, 0)

console.log(countActive)

const countInactive = users.reduce((acc,user) => {
    if(user.active == false){
        acc += 1
    }
    return acc
}, 0)

console.log(countInactive)

const topSalary = users.reduce((maior,user) => {

    if(user.salary > maior){
        maior = user.salary
    }

    return maior
}, 0)

console.log(topSalary)


const bottomSalary = users.reduce((menor, user) => {
    if(user.salary < menor){
        menor = user.salary
    }

    return menor
}, users[0].salary)

console.log(bottomSalary)

const sumActiveSalary = users.reduce((acc, user) => {
    if(user.active == true){
        acc += user.salary
    }
    return acc
}, 0)

console.log(sumActiveSalary)

// ================================================================================ DESAFIO ================================================================================

const avgSalaryActive = users.reduce((acc, user) => {
    if(user.active == true){
        acc += user.salary
    }

    return acc / users.length

}, 0)

console.log(avgSalaryActive.toFixed(2))

const sumTotal = users.reduce((acc, user) => {
    return acc + user.salary
}, 0)

console.log(sumTotal)

const filtrar5000 = 

users_5000 = users.filter((p) => p.salary > 5000)
const maiorque5mil = users_5000.map((user) => {
    return{name:user.name, role: user.role}
})

console.log(maiorque5mil)

users_manager_active = users.filter((p) => p.role == 'manager' & p.active == true)
const avgManager = users_manager_active.reduce((acc, user) => {
    return acc + user.salary / users_manager_active.length
},0)

console.log(avgManager)

