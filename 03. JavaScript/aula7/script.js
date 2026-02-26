let x = [1,2,3,4,{name:"igor"}]

const pessoas = []

const pessoa1 = {
    name: 'igor',
    lastname: 'machado',
    age: 20
}

const pessoa2 = {
    name: 'pedro',
    lastname: 'marinho',
    age: 20
}

const pessoa3 = {
    name: 'thiago',
    lastname: 'vilhena',
    age: 22
}

const pessoa4 = {
    name: 'erish',
    lastname: 'natal',
    age: 22
}

const pessoa5 = {
    name: 'phillipe',
    lastname: 'mugnaini',
    age: 19
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)

const FilteredPeople = pessoas.filter((p) => p.age > 20)
const FindIgo = pessoas.find((p) => p.name == 'igor')

console.log(FilteredPeople)
console.log(FindIgo)
console.log(pessoas.indexOf(FindIgo))

let container = document.getElementById('container')

function createCard(pessoa){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name} ${pessoa.age}`
    div.appendChild(span)

    return div
}

FilteredPeople.forEach(pessoa => {
    const card = createCard(pessoa)
    container.appendChild(card)
})