// const pessoa = require('./data.json')

// const pessoas = pessoa.filter((pessoa) => pessoa.salary == 1234)
// const pais = pessoa.map((p) => {
//     return{name: p.name, parents: p.parents}
// })

// console.log(pais)

const data = async () => {
    const people = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await people.json()
    console.log(data)
}

data()

