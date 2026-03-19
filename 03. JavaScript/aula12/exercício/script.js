class User {
    #id
    #name
    #email
    #password
    #active

    static #allUsers = []

    constructor(id, name, email, password, active){

        if(new.target == User){
            throw new Error('A classe User não pode ser instanciada diretamente.')
        }

        if(!id){
            throw new Error('ID é obrigatório.')
        }

        this.#id = id

        if(!name){
            throw new Error('Name não pode ser vazio')
        }

        this.#name = name

        if(!email || !email.includes('@')){
            throw new Error('Email inválido.')
        }

        this.#email = email

        if(!password || password.length < 6){
            throw new Error('Senha deve ter no mínimo 6 caracteres.')
        }

        this.#password = password

        this.#active = true

        User.#allUsers.push(this)
    }

    get id(){
        return this.#id
    }

    static getAllUsers(){
        return User.#allUsers
    }

    changeName(email,password,newName){
        if(!newName){
            throw new Error('Name não pode ser vazio')
        }
        if(email === this.#email && password === this.#password){
            this.#name = newName
        }
        else{
            throw new Error('Não foi possível alterar seu nome.')
        }
    }

    changeEmail(email,password,newEmail){
        if(!newEmail){
            throw new Error('Email não pode ser vazio')
        }
        if(email === this.#email && password === this.#password){
            this.#email = newEmail
        }
        else{
            throw new Error('Não foi possível alterar seu e-mail.')
        }
    }

    changePassword(email,password,newPassword){
        if(!email || !password){
            throw new Error("E-mail ou Senha não podem ser vazios")
        }
        if(newPassword.length < 6){
            throw new Error('Senha deve ter no mínimo 6 caracteres.')
        }
        if(email === this.#email && password === this.#password){
            this.#password = newPassword
        }
        else{
            throw new Error('Não foi possível alterar a senha.')
        }
    }

    verifyPassword(email,typedPassword){
        if(!email || !typedPassword){
            throw new Error("E-mail ou Senha não podem ser vazios")
        }
        if(email === this.#email && typedPassword === this.#password){
            return "A senha digitada está correta"
        }
        else{
            return "A senha digitada está incorreta"
        }
    }

    disableUser(id){
        if(!id){
            throw new Error('Id não pode ser vazio')
        }
        if(id === this.#id){
            this.#active = false
        }
        else{
            throw new Error('Id inválido')
        }
    }

    reactivate(){
        this.#active = true
    }

    showUser(){
        return {
            ID: this.#id,
            Name: this.#name,
            Email: this.#email,
            Active: this.#active
        }
    } 
}

class Admin extends User{
    
    listUsers(){
        return User.getAllUsers().map(user => user.showUser())
    }

    disableUser(id){
        const user = User.getAllUsers().find(u => u.id === id)
        if(!user) throw new Error('Usuário não encontrado')
            user.disableUser(id)
    }

    reactivateUser(id){
        const user = User.getAllUsers().find(u => u.id === id)
        if(!user) throw new Error('Usuário não encontrado')
            user.reactivate()
    }
}

class Client extends User {
    constructor(id, name, email, password){
        super(id, name, email, password)
    }
}
