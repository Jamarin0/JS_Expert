const assert = require('assert')

function* calculation(arg1, arg2) {
    yield arg1 * arg2
}

function *main() {
    yield 'HI'
    yield '--'
    yield 'World'
    yield* calculation(20, 10)

}

const genereator = main()

// console.log(genereator.next())
// console.log(genereator.next())
// console.log(genereator.next())
// console.log(genereator.next())
// console.log(genereator.next())

assert.deepStrictEqual(genereator.next(), { value: 'HI', done: false})
assert.deepStrictEqual(genereator.next(), { value: '--', done: false})
assert.deepStrictEqual(genereator.next(), { value: 'World', done: false})
assert.deepStrictEqual(genereator.next(), { value: 200, done: false})
assert.deepStrictEqual(genereator.next(), { value: undefined, done: true})


assert.deepStrictEqual(Array.from(main()), ['HI', '--', 'World', 200])
assert.deepStrictEqual([...main()], ['HI', '--', 'World', 200])

// ---- async iterators
const { readFile, stat, readdir} = require('fs/promises')

function* promisified() {
    yield readFile(__filename)
    yield Promise.resolve('Hey Dude')
}

async function* systemInfo() {
    const file = await readFile(__filename)
    yield { file: file.toString()}

    const { size } = await stat(__filename)
    yield { size }

    const dir = await readdir(__dirname)
    yield { dir }
}

// Promise.all([...promisified()]).then(results => console.log('promisified', results))
// ;(async () => {
//     for await (const item of promisified()){
//         console.log('for await', item.toString())
//     }
// })()

;(async () => {
    for await (const item of systemInfo()){
        console.log('systemInfo', item)
    }
})()