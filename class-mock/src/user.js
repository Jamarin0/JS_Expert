class User {
    constructor({name, id, profession, age}) {
        this.name = name
        this.id = parseInt(id)
        this.profession = profession
        this.age = Date.prototype.getFullYear = () => 2022
    }
}

module.exports= User