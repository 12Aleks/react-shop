const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') //для хеширования паролей и чтоб они не были в открытом доступе
const jwt = require('jsonwebtoken')//формирует токен
const {User, Basket} = require('../models/models')


//user role
const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}) //сколько живет токен
}

class UserController{
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        //проверка на наличие email
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        //хеширование пароля с bcrypt
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }


    async login(req, res, next){
          const {email, password} = req.body

          // Ищим email в базе
          const user = await User.findOne({where: {email}})
          if(!user) return next(ApiError.badRequest('Taki użytkownik nie istnieje'));

          // cравниваем пароль в базе и введенный пользователем
          let comparePassword = bcrypt.compareSync(password, user.password)
          if(!comparePassword) return next(ApiError.badRequest('Taki użytkownik nie istnieje'));

          const token = generateJwt(user.id, user.email, user.role )
          return req.json({token})

    }

    async check(req, res, next){
        // const {id} = req.query
        // if(!id){
        //   return next(ApiError.badRequest('User dont have ID'))
        // }
        // res.json(id)
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return  res.json({token})
    }
}

module.exports = new UserController()