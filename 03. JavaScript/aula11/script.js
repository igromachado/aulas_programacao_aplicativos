class Automovel {

    constructor(modelo, marca, cor, ano, motor){

        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando.`
    }

    frear(){
        return `O veículo ${this.marca} ${this.modelo} está freando.`
    }

    esterçar(lado){
        return `O veículo ${this.marca} ${this.modelo} está virando para a ${lado}.`
    }
}

class Pessoa {

    constructor(nome, idade, peso, altura, profissão){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.profissão = profissão
    }

    correr(){
        return `O ${this.nome} está correndo mal pra um cara de ${this.idade} anos`
    }

    falar(){
        return `O ${this.nome} não para de falar nesse caralho`
    }

    respirar(){
        return `O ${this.nome} está respirando legal`
    }

    descansar(){
        return `O ${this.nome} ta dormino, cansou de ser ${this.profissão}`
    }
}

class Animal {

    constructor(nome_científico, espécie){
        this.nome_científico = nome_científico
        this.espécie = espécie
    }

    alimentar(){
        return `O ${this.nome_científico} ta comendo`
    }

    respirar(){
        return `O ${this.nome_científico} da espécie ${this.espécie} respira legal`
    }

    locomover(){
        return `O ${this.nome_científico} anda engraçado`
    }
}

class Produto{

    constructor(marca, categoria, preço){
        this.marca = marca
        this.categoria = categoria
        this.preço = preço
    }

    utilizar(){
        return `${this.marca} é um produto ${this.categoria}`
    }

    comprar(){
        return `${this.marca} pode ser comprado nos mercados por ${this.preço}`
    }
}

class Carro extends Automovel {
    abrirPortas(){
        return "Abrindo as portas!"
    }
}

class Moto extends Automovel {
    grau(){
        return "ta fazendo grau motoboy filho da puta"
    }
}

class Estudante extends Pessoa {
    fala(){
        return `eu sou o ${this.Pessoa}`
    }
}

const Automovel1 = new Automovel("Civic", "Honda", "Prata", 2020, "2.0")
console.log(Automovel1.acelerar())

const Automovel2 = new Automovel("Mustang", "Ford", "Vermelho", 2022, "5.0 V8")
console.log(Automovel2.esterçar("direita"))

const pessoa1 = new Pessoa("Neymar", 33, 68, 1.75, "jogador")
console.log(pessoa1.correr())
console.log(pessoa1.falar())

const pessoa2 = new Pessoa("Tony Stark", 48, 82, 1.85, "engenheiro")
console.log(pessoa2.respirar())
console.log(pessoa2.descansar())

const animal1 = new Animal("Hydrochoerus hydrochaeris", "Capivara")
console.log(animal1.locomover())

const produto1 = new Produto("Lacta", "alimentício", "R$ 6,50")
console.log(produto1.utilizar())
console.log(produto1.comprar())

const carro = new Carro("Kwid", "Renault", "Amarelo", 2018, "1.0L")
console.log(carro.acelerar())
console.log(carro.abrirPortas())

const moto = new Moto("S1000RR", "BMW", "Azul", 2025, "1000cc")
console.log(moto.acelerar())
console.log(moto.grau())