const assert = require('assert')

function* calculation(arg1, arg2) {
    yield arg1 * arg2
}

function *main() {
    yield 'HI'

}

const genereator = main()
console.log(genereator.next())