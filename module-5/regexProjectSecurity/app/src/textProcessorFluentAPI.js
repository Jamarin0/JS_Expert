const { evaluateRegex } = require('./util')
//o objetivo do Fluent API é executar tarefas
// como um pipeline, step by step
// e no fim, chama o buil. Muito similiar ao padrao builder
// a diferença que aqui é sobre processos, o builder sobre construcao
// de objetos
class TextProcessorFluentAPI {
    //propriedade privada!
    #content
    constructor(content){
        this.#content = content
    }
    extractPeopleData(){
        // ?<= fala que vai extrair os dados que virao depois dese grupp
        // [contratane|contratada] ou um ou outro, (e tem a flag no fim da expressoa pra pegar maiusculo ou minisculo)
        // :\s{1} vai procurar o caracter literal do dois pontos seguindo de um espaço
        // tudo acima fica dentro de um parenteses para falar "vamos pegar dai pra frente"

        //(?!s) negative look around, vai ignorar os contratantes do fim do documento(que tem só espaço a frnete deles)
        // .*\n pega qualquer coisa até o primeiro \n
        //.*? non greety, esse? faz com que ele pare na primeira recorrencia, assim ele evita ficar em loop

        // $ informar que a pesquisa acaba no fim da linha
        //g -> global
        //m -> multiline
        // i -> insensitive

        const matchPerson = evaluateRegex(/(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi)

        // faz o match pra encontrar a string inteira que contem os dados que precisamos
        const onlyPerson = this.#content.match(matchPerson)
        // console.log(matchPerson.test(this.#content))
        this.#content = onlyPerson
        return this
    }

    divideTextInColumns() {
        const splitRegex = evaluateRegex(/,/)
        this.#content = this.#content.map(line => line.split(splitRegex))
        return this
    }

    removeEmptyCharacters() {
       const trimSpaces = evaluateRegex(/^\s+|\s+$|\n/g)
       this.#content = this.#content.map(line => line.map(item => item.replace(trimSpaces, "")))
        return this
    }
    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentAPI