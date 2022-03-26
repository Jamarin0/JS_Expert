const { evaluateRegex } = require("./util");

class Person {
  //(\w+):\s.*,
  //$1,

  constructor([
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado,
  ]) {
    // ^ -> começo da string
    // + -> um ou mais ocorrencias
    // (\w{1}) -> pega so a primeira palavra e deixa em um gp
    // (a-zA=Z) encontra letras Maiusculas e minusculas, adicionamos o + para ele pegar todas até o caracter especial
    // g -> todas as ocorrencias que encontrar

    const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g);
    const formatFistLetter = (prop) => {
      return prop.replace(firstLetterExp,(fullMatch, group1, group2, index) => {
          return `${group1.toUpperCase()}${group2.toLowerCase()}`
      });
    };

   //(\w+),
    //this.$1 = $1
    this.nome = nome;
    this.nacionalidade = formatFistLetter(nacionalidade);
    this.estadoCivil = formatFistLetter(estadoCivil);
    // tudo q n for digito sera removido  /g serve para remover as ocorrencias q encontrar
    this.documento = documento.replace(evaluateRegex(/\D/g), "");
    // começa a procurar depois do " a " e pega tudo que tem a frente
    // (?<= faz com que ignore tudo que tiver antes desse match
    // conhecido como positive lookBehind
    this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
    this.numero = numero;
    // começa a buscar depois do espaço, pega qlqr letra ou digito até o fim da linha (poderia ser o .* tbm)
    this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
    //remove o . no final da frase
    this.estado = estado.replace(evaluateRegex(/\.$/), "");
  }
}

module.exports = Person;
