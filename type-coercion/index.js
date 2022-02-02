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
    toString(){
        return `Name: ${this.name}, Age: ${this.age}` 
    },
    valueOf(){
        return 007
    }
}

console.log('item', item + 0)
