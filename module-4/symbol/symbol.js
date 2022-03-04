const assert = require('assert')


// --- keys
const uniqueKey = Symbol("UserName")
const user = {}

user["userName"] = 'value for normal Objects'
user[uniqueKey] = 'value for symbol'

// console.log('gettin normal objects', user.userName)
// //sempre único em nível de endereço de memoria
// console.log('gettin normal objects', user[Symbol("userName")])
// console.log('gettin normal objects', user[uniqueKey])

assert.deepStrictEqual(user.userName, 'value for normal Objects')

// //sempre único em nível de endereço de memoria
assert.deepStrictEqual(user[Symbol("userName")], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for symbol')

//é dificil de pegar mas nao é secreto
assert.deepStrictEqual(Object.getOwnPropertySymbols(user)[0], uniqueKey)

//byPass - má pratica(não tem no codebase do node)
user[Symbol.for('password')] = 123
assert.deepStrictEqual(user[Symbol.for('password')], 123)
// --- keys

// well known symbols
const obj = {
    // iterators
    [Symbol.iterator]: () => ({
        items: ['c', 'b', 'a'],
        next() {
            return {
                done: this.items.length ===0,
                // remove o ultimo e retorna
                value: this.items.pop()
            }
        }
    })
} 

// for(const item of obj){
//     console.log('item', item)
// }

assert.deepStrictEqual([...obj], ['a', 'b', 'c'])

const kItems = Symbol('kItems')
class MyDate{
    constructor(...args) {
        this[kItems] = args.map(arg => new Date(...arg))
    }
}

const myDate = new MyDate(
    [2020, 03, 01],
    [2018, 02, 02]
)

const expectedDates = [
    new Date()
]