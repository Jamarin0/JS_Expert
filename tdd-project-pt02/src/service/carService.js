const BaseRepository = require('./../repository/baseRepository')

class CarService {
    constructor({cars}){
        this.carRepository = new BaseRepository({ file: cars})
    }

    async getAvailableCar(carCategory) {
        return null
    }
}

module.exports = CarService