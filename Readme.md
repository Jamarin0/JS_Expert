<h1>Repositório criado para desenvolvimento de testes e novas skills.</h1>

### Os 4 primeiros 

1 - class mock;\
2 - class spies;\
3 - class stubs;\
4 - coverage e2e;

# Contendo neles:

- class-mock: Onde foi realizado o mock para testes de arquivos .csv;
<br>

- class-stubs: Onde foi utiliado o Sinon para realização de testes com o acesso a dados externos, chamando a api swapi, guardando o retorno da requisição em um json e testando as funções sem precisar repetir request externas a cada teste;
<br>

- class-spies: para observar as funções, validando a quantidade de vezes que foram chamadas, testando os parametros e os resultados utilizando o algoritmo de um fibonacci;
<br>

- coverage-e2e: Utilizando libs mocha e nyc para o teste de integração, onde foi realizado a cobertura de código;

### Por fim, podemos ir para os mais completos - TDD

os 3 últimos projetos foram criados como um passo a passo, sendo assim o projeto final tdd-project-pt-03 é o mais completo. \
Nele foi utilizado o padrão de desenvolvimento TDD e todos os testes unitários, mock de objetos, teste de funções para verificar o resultado retornado, stubs para testes a partir de determinado ponto, tudo com 100% de cobertura.

# Nesse repositório também foi adicionado:

Tipo de valor vs Tipo de referência(Immutability vs Mutability);\
Coerção de tipos & Objects lifecycle: toString, valueOf e Symbol.toPrimitive;\
Prototype Chain - Herança em js;
