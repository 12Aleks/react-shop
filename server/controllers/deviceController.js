const uuid = require('uuid')
//uuid - генерирует рандомные id файлов которые идут как название файла npm i uuid
const path = require('path') //модуль из node.js - генерируем путь с его помошью
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) // сформированный файл перемешаем в папку static

            const device = await Device.create({name, price, brandId, typeId, img: fileName});
            return res.json(device)
        }catch (e){
           next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {


    }
}

module.exports = new DeviceController()