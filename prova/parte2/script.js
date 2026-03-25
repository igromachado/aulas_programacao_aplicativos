const veiculos = []

class Veiculo{

    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){

        this.#id = id

        if(!marca || marca.lenght < 2){
            return console.error('Marca deve ter no mínimo 2 caracteres.')
        }
        this.#marca = marca

        if(!modelo || modelo.lenght < 2){
            return console.error('Modelo deve ter no mínimo 2 caracteres')
        }
        this.#modelo = modelo

        if(preco <= 0 || this.disponivel == false){
            return console.error('Não foi possível alterar o preço')
        }
        this.#preco = preco

        this.#disponivel = true

        veiculos.push({id, marca, modelo, preco})
    }

    getId(){
        return this.#id
    }

    getMarcaModelo(){
        return ` ${this.#marca} - ${this.#modelo}`
    }
    
    getPreco(){
        return this.#preco
    }

    mudarPreco(preco){
        if(this.#disponivel === false){
            return console.error('Veículo indisponível')
        }
        else{
            this.#preco = preco
        }
    }

    checkDisponibilidade(){
        return this.#disponivel
    }

    venderVeiculo(){
        if(this.#disponivel === false){
            return console.error('O veículo já foi vendido')
        }
        else{
            this.#disponivel = false
        }
    }
    
    retornarVeiculo(){
        if(this.#disponivel === true){
            return console.error('O veículo já foi retornado')
        }
        else{
            this.#disponivel = true
        }
    }

    mostrarDados(){
        return{
            id: this.getId(),
            modelo_marca: this.getMarcaModelo(),
            preco: this.getPreco(),
            disponibilidade: this.checkDisponibilidade()
        }
    }
}

class Carro extends Veiculo{
    #portas
    #disponivel

    constructor(id,marca,modelo,preco,portas){
        super(id,marca,modelo,preco)

        if(portas < 0){
            return console.error('Número de portas inválido')
        }
        this.#portas = portas
        this.#disponivel = true
    }
}

class Moto extends Veiculo{
    #cilindradas
    #disponivel

    constructor(id,marca,modelo,preco,cilindradas){
        super(id,marca,modelo,preco)

        if(cilindradas < 50 || cilindradas > 2000){
            return console.error('Número de cilindradas inválido.')
        }
        this.#cilindradas = cilindradas
        this.#disponivel = true
    }
}

const carro1 = new Carro(1,'clio', 'clio', 1000, 4)

console.log(carro1.mostrarDados())

const moto1 = new Moto(2, 'suzuki', 'moto', 1200, 1000)

console.log(moto1.mostrarDados())

carro1.mudarPreco(5000)

console.log(carro1.getPreco())

moto1.venderVeiculo()

moto1.retornarVeiculo()

moto1.venderVeiculo()

moto1.mudarPreco(1000)

moto1.venderVeiculo()

console.log(moto1.getPreco())

carro1.mudarPreco(530)

console.log(carro1.getPreco())