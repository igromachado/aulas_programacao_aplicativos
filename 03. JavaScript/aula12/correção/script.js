const users = []

class User {
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password){

        if(!name || !email.includes("@") || password.length < 6){
            return console.error('erro')
        }

        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
        users.push({id, name, email, password, active: true})
    }

    getId(){
        return this.#id
    }

    getName(){
        return this.#name
    }

    getEmail(){
        return this.#email
    }

    setName(name){
        return !name ? console.error('erro ao setar nome') : this.#name = name
    }

    setEmail(email){
        return !email.contains('@') ? console.error('erro ao setar email') : this.#email = email
    }

    setPassword(password){
        return password.length < 6 ? console.error('Erro ao setar senha') : this.#password = password
    }

    verifyPassword(password){
        return password === this.#password ? false : true
    }

    changeUserActive(){
        return this.#active === true ? this.#active === false : this.#active = true
    }

    verifyUserActivity(){
        return this.#active === true ? true : false
    }
}

class Client extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)    
    }

    showData(){
        return{
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            active: this.verifyUserActivity()
        }
    }

    changeData(name, email, password){
        this.setName(name)
        this.setEmail(email)
        if(this.verifyPassword(password) == true){
            return console.error('Não é possível alterar pela mesma senha.')
        }
        else{
            this.setName(name)
            this.setEmail(email)
            this.setPassword(password)
        }
    }
}

class Admin extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    showAllUsers(){
        return users
    }
}

const c1 = new Client(1, "igor", "igor.fam10@gmail.com", "123456")
console.log(c1.showData())

const a1 = new Admin(1, 'Admin', 'admin@gmail.com', 123456)
console.log(a1.showAllUsers())