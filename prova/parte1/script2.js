const data = require('./dados.json')

const products = data.map((produto) => {
    return{Product: produto.nome}
})

const infos = data.map((produto) => {
    return{Product: produto.nome, Price: produto.preco, Total_Value: produto.preco * produto.quantidade}
})

const above500 = data.filter((p) =>  p.preco > 500)

const less5 = data.filter((p) =>  p.quantidade < 5)

const total_value = infos.reduce((acc, product) => {
    return acc + product.Total_Value
}, 0)

const total_value_eletronic = infos.reduce((acc, product) => {
    if(product.categoria == 'Eletronico'){
        acc += product.Total_Value
    }
    return acc    
}, 0)

const total_value_10 = infos.reduce((acc, product) => {
    if(product.quantidade > 10){
        acc += product.Total_Value
    }
    return acc    
}, 0)

const topProduct = infos.reduce((maior,product) => {

    if(product.Total_Value > maior){
        maior = product.Total_Value
    }

    return maior
}, 0)

const bottomProduct = infos.reduce((menor, product) => {
    if(product.Total_Value < menor){
        menor = product.Total_Value
    }

    return menor
}, infos[0].Total_Value)

const cheap = data.reduce((menor, product) => {
    if(product.preco < menor){
        menor = product.preco
    }

    return menor
}, data[0].preco)

const expensive = data.reduce((maior,product) => {

    if(product.preco > maior){
        maior = product.preco
    }

    return maior
}, 0)

const biggest_quantity = data.reduce((maior,product) => {

    if(product.quantidade > maior){
        maior = product.quantidade
    }

    return maior
}, 0)

const minor_quantity = data.reduce((menor, product, nome) => {
    if(product.quantidade < menor){
        menor = product.quantidade
    }

    return menor
}, data[0].quantidade)

const avgPrice = data.reduce((acc, product) => {
    
    return acc += product.preco / data.length

}, 0)

console.log(avgPrice)