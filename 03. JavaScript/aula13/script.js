// Abstração -> trazer um objeto do mundo real para a programação
// Herança -> classe filha herda atributos e métodos da classe pai
// Encapsulamento -> gerenciar a visibilidade e o acesso aos dados (atributos e métodos)
// Polimorfismo -> transformação de métodos baseado em uma classe

class Animal{
    #nome_cientifico
    #peso
    #alimentacao

    constructor(nome_cientifico, peso, alimentacao){
        this.#nome_cientifico = nome_cientifico
        this.#peso = peso
        this.#alimentacao = alimentacao
    }

    emitirSom() {
        console.log('Emitindo som...')
    }

    locomover() {
        console.log("Se locomovendo...")
    }
}

class Cachorro extends Animal{
    emitirSom(){
        console.log('eu sou burro')
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log('eu te odeio, humano')
    }
}

const dog = new Cachorro('marcus', '15', 'rasao')
const cat = new Gato('Gordo', 10, 'tudo')

cat.emitirSom()
dog.emitirSom()

