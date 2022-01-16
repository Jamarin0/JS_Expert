const Fibonacci = require("./fibonacci")
const sinon = require('sinon')
const assert = require('assert')

;
(async () => {
  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(fibonacci, fibonacci.execute.name)

    //generator retorna os interators, (.next) 
    // existe 3 formas de ler os dados
    //usando as funcoes .next, for await e rest/spred
    fibonacci.execute(3)

    const expecetdCallCount = 4 
    assert.deepStrictEqual(spy.callCount, expecetdCallCount)
  }
})();
