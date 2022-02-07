true + 2
//3

true - 2
//-1

'21' + true
//'21true'

'21' - true
//20

21 - - 1
// 22

0.1 + 0.2 === 0.3
//false

3 > 2 > 1
// false

3 > 2 >= 1
// true
9999999999999999 // 16
//10000000000000000

'b' + 'a' + + 'a' + 'a'
// banana

// https://whatthefuck.is/

console.assert(String(123) === '123', "Explicit convertion to string")
console.assert(123 + '' === '123', "Implicit convertion to string")

console.assert(('Hello' || 123) === 'Hello', " || return de first element!")
console.assert(('Hello' && 123) === 123, "&& return de last element!")

// -----------

const item = {
    name: 'Guilherme Jamarino',
    age: 21,
    // string: 1 se nao for primitivo, chama o valueOf
    toString(){
        return `Name: ${this.name}, Age: ${this.age}` 
    },
    // number: 1 se nao for primitvo,chama o toString
    valueOf(){
        return {hey: 'dude'}
        // return 007
    },
    //ele tem prioridade
    [Symbol.toPrimitive](coercionType) {
        // console.log('trying to convert to', coercionType)
        const types = {
            string: JSON.stringify(this),
            number: '0007'
        }

        return types[coercionType] || types.string
    }
}

// console.log('toString', String(item))
//// vai retornar o NaN pois o toString retornou a string
// console.log('valueOf', Number(item))

// depois de adicionar o primitive
// console.log('String', String(item))
// console.log('Number', Number(item))
// //chama a conversão default
// console.log('Date', new Date(item))

console.assert(item + 0 === '{"name":"Guilherme Jamarino","age":21}0')
// console.log('!!item is true', !!item)
console.assert(!!item)

// console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"name":"Guilherme Jamarino","age":21}')

// console.log('implicit + explicit coercion (using ==)',item == String(item))
console.assert(item == String(item))

const item2 = { ...item, name: "jj", age: 99}
// console.log('New Obj', item2) 
console.assert(item2.name === "jj" && item2.age === 99)