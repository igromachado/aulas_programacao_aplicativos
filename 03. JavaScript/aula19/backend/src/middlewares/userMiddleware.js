
export function validateRegister(req, res, next){
    const {name, email, password} = req.body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(name.trim() == '' || name.trim().length < 3 || !name){
        return res.status(400).send({response: 'Usuário inválido'})
    }

    if(!emailRegex.test(email)){
        return res.status(400).send({response: 'E-mail inválido.'})
    }

    next()
}