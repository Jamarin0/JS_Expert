'use strict'

const assert = require('assert')
//garantir semantica e seguranca dos objetos

// -----apply
const myObj = {
    add(myvalue) {
        return this.arg1 + this.arg2 + myvalue
    }
}

// Function.prototype.apply = () => { throw new TypeError('Eita')}
// myObj.add.apply = function () { throw new Error('Vixxx')}

assert.deepStrictEqual(myObj.add.apply({ arg1: 10, arg2: 20}, [ 100]), 130)

// um problema que pode acontecer(raro)
// Function.prototype.apply = () => { throw new TypeError('Eita')}

// pode acontecer
myObj.add.apply = function () { throw new TypeError('Vixxx')}

assert.throws(
    () => myObj.add.apply({}, []),
{
    name: "TypeError",
    message: "Vixxx"
})

//usando reflect
const result = Reflect.apply(myObj.add, { arg1: 40, arg2: 20}, [200])
assert.deepStrictEqual(result, 260)
// --- apply

// --- defineProperty

// questoes semanticas
function MyDate() {}

// object adicionando prop pra uma function
Object.defineProperty(MyDate, 'withObject', { value: () => 'Hey there'})

Reflect.defineProperty(MyDate, 'withReflection', { value: () => 'Hey dude'})

assert.deepStrictEqual(MyDate.withObject(), 'Hey there')
assert.deepStrictEqual(MyDate.withReflection(), 'Hey dude')
// -- defineProperty


// -- deleteProperty
const withDelete = { user: 'Jamarino'}
//imperfomático, evitar ao máximo
delete withDelete.user

assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false)

const withReflection = {user: 'Joao Jamarino'}
Reflect.deleteProperty(withReflection, 'user')
assert.deepStrictEqual(withReflection.hasOwnProperty('user'), false)

// -- delete Property


// -- get

//deveriamos fazer um get somente em instancias de referencia
assert.deepStrictEqual(1['username'], undefined)
//com reflection uma exceção é lançada
assert.throws(() => Reflect.get(1, "username"), TypeError)
//get

//-- has
assert.ok('superman' in { superman: ''})
assert.ok(Reflect.has({batman: ''}, 'batman'))
//-- has

// --- ownKeys
const user = Symbol('user')
const databaseUser = {
    id: 1,
    [Symbol.for('password')]: 123,
    [user]: 'SuperJama'
}

// com os metodos de Object, temos q fazer 2 req
const objectKeys = [
    ...Object.getOwnPropertyNames(databaseUser),
    ...Object.getOwnPropertySymbols(databaseUser)
]
// console.log('objectKeys', objectKeys)
assert.deepStrictEqual(objectKeys, ['id', Symbol.for('password'), user])

// com reflection
assert.deepStrictEqual(Reflect.ownKeys(databaseUser), ['id', Symbol.for('password'), user])
