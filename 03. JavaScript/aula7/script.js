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

// const FilteredPeople = pessoas.filter((p) => p.age > 20)
// const FindIgo = pessoas.find((p) => p.name == 'igor')

// console.log(FilteredPeople)
// console.log(FindIgo)
// console.log(pessoas.indexOf(FindIgo))

// let container = document.getElementById('container')

// function createCard(pessoa){
//     let div = document.createElement('div')
//     let span = document.createElement('span')
//     span.innerHTML = `${pessoa.name} ${pessoa.age}`
//     div.appendChild(span)

//     return div
// }

// FilteredPeople.forEach(pessoa => {
//     const card = createCard(pessoa)
//     container.appendChild(card)
// })

// método filter -> filtrar de um vetor com base em uma condição
// método find -> encontrar um valor com base em uma condição
// método reduce -> reduz o vetor para um único valor

const arr = [1,2,3,4,5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log(somaArr)

const avgAge = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

console.log(avgAge.toFixed(0))

//map transforma um vetor de acordo com uma condição

const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})

console.log(mappedArr)

const mappedPeople = pessoas.map((pessoa) => {
    return {name: pessoa.name, lastname:  pessoa.lastname}
})

console.log(mappedPeople)