const  assert  = require('assert');

const myMap = new Map();

//podem ter qualquer coisa como chave
myMap
  .set(1, "one")
  .set("GG", { text: "two" })
  .set(true, () => "hello");

//usando um construtor
const myMapWithConstructor = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

// console.log("myMap", myMap);
// console.log("myMap.get(1)", myMap.get(1));
assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('GG'), {text: 'two'})
assert.deepStrictEqual(myMap.get(true)(), 'hello')

//EM Objects a chave só pode ser string ou symbol (number é coergido a string)
const onlyReferenceWorks = { id: 1}
myMap.set(onlyReferenceWorks, { name: 'Jamarino'})

// console.log('get', myMap.get(onlyReferenceWorks))
assert.deepStrictEqual(myMap.get({id: 1}), undefined)
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'Jamarino'})

//utilitários
// - no Object seria Object.keys({a: 1}).length
assert.deepStrictEqual(myMap.size, 4)

//para verificar se um item existe no objeto
//item.key = se nao existe = undefined
// if() = coercao implicita para boolean e retorna false
// o jeito certo em Object é ({name: 'Jamrino'}).hasOwnProperty('name')

assert.ok(myMap.has(onlyReferenceWorks))

//nao da pra iterar em Objects diretamente tem que transformar com o Object.entries(item)
assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1, "one"],["GG", {"text":"two"}],[true, () => {}], [{"id":1},{"name":"Jamarino"}]]) ) 

// for (const [key, value] of myMap) {
//   console.log({key, value})
// }

//Object é inseguro, pois dependendo do nome da chave, pode substituir algum comportamento padrao 
//({ }).toString() => '[object Object]'
//({toString: () => 'Hey' }).toString() == 'Hey'

//qualquer chave pode colidir, com as propriedades herdadas do objecto, como constructor, toString, valueOf e etc.

const actor = {
  name: 'xuxa',
  toString: 'queen: xuxa'
}

myMap.set(actor)

assert.ok(myMap.has(actor), null)
assert.throws(() => myMap.get(actor).toString, TypeError)

//nao da pra limpar um Obj sem reassina-lo
// myMap.clear()
// assert.deepStrictEqual([...myMap.keys()], [])