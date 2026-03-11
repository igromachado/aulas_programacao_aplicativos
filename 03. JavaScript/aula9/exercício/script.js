const data = require('./data2.json')

const sumTotal = data.reduce((acc, car) => {
    return acc + car.price_brl
}, 0)
'   '
console.log('soma: ' + sumTotal)

const avgPrice = data.reduce((acc, car) => {
    return acc + car.price_brl / data.length  
},0)

console.log('média: ' + avgPrice.toFixed(2))

const maiorque2020 = data.map((car) => {
        if(car.year > 2020){
            return {Brand: car.brand, Model: car.model}
        }
})

console.log(maiorque2020)

const avgHorsePower = data.reduce((acc, car) => {
    return acc + car.horsepower / data.length
}, 0)

console.log("Average Horse Power: " + avgHorsePower.toFixed(2))

const avgWeight = data.reduce((acc, car) => {
    return acc + car.weight_kg / data.length
},0)

console.log("Average Weight: " + avgWeight)

