const library = []

class Item {
    #id
    #title
    #available

    constructor(id, title){
        if(!title){
            return console.error('Title não pode ser vazio!')
        }

        this.#id = id
        this.#title = title
        this.#available = true
        library.push({id, title, active: true})
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }

    setTitle(title){
        return !title ? console.error('Erro ao setar título') : this.#title = title
    }

    checkAvailability(){
        return this.#available === true ? true : false
    }

    lendBook(){
        if(!this.#available) return console.error('O livro já foi emprestado')
        this.#available = false
    }

    returnBook(){
        if(!this.#available) return console.error('O livro já foi devolvido')
        this.#available = false
    }

    showItem(){
        return{
            id : this.getId(),
            title : this.getTitle(),
            available : this.checkAvailability()
        }
    }

    showAllItems(){
        return library
    }
}

class Book extends Item {
    #author
    
    constructor(id, title, author){
        super(id, title)

        if(!author){
            return console.error('Author não pode ser vazio')
        }
        this.#author = author
    }

    getAuthor(){
        return this.#author
    }
}

class Movie extends Item {
    #duration

    constructor(id, title, duration){
        super(id, title)

        if (duration < 0){
            return console.error('Duration deve ser maior que 0')
        }
        this.#duration = duration
    }

    getDuration(){
        return this.#duration
    }
}

const i1 = new Item(1, 'igo')
const b1 = new Book(2, 'Jantar Secreto', 'Rafael Montes')
const m1 = new Movie(3, 'Homem-Aranha', '100 min')
console.log(library)
