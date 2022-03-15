const assert = require('assert')

//usado na maioria das vezes para listas de itens unicos

const arr1 = ["0", "1", "2"]
const arr2 = ["2", "0", "3"]
const arr3 = arr1.concat(arr2)

// console.log('arr3', arr3.sort())
assert.deepStrictEqual(arr3.sort(), [ '0', '0', '1', '2', '2', '3' ])

const set = new Set()
arr1.map(item => set.add(item))
arr2.map(item => set.add(item))

// console.log('Set with add item per item',set)
assert.deepStrictEqual(Array.from(set), ['0', '1', '2', '3'])

assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), ['0', '1', '2', '3'])

// console.log('set.keys', set.keys())
// console.log('set.values', set.values()) // só existe por conta do Map

//no Array comum, para saber como um item existe
// [].indexOf('1') !== -1 ou [0].includes(0)
assert.ok(set.has('3'))

// mesma teoria do Map, mas você sempre trabalha com a lista toda
// nao tem get, então voce pode saber se o item está ou não no array e é isso

// tem nos duas listas
const user01 = new Set([
    'GG',
    'Jamarino',
    'xuxa'
])

const user02 = new Set([
    'Julio',
    'Jamarino',
    'Cezar'
])

const intersection = new Set([...user01].filter(user => user02.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['Jamarino'])

const difference = new Set([...user01].filter(user => !user02.has(user)))
assert.deepStrictEqual(Array.from(difference), ['GG', 'xuxa'])
