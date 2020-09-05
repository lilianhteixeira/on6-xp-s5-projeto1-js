console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia
const falar = () => 'Pipipi popopo'

const dobro = (num) => num * 2

const calcularMedia = (nota1, nota2, nota3) => {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

// Vamos refatorar essas funções para a sintaxe de Arrow function





console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Callback')

// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

const ordenar = (a, b) => (a <= b) ? [a, b] : [b, a]

// Crie uma função chamada calcular que receberá como parâmetro: dois números e uma função de callback

const calcular = (num1, num2, callback) => callback(num1, num2); 

// Faça a soma de dois números usando a função calcular

  const resultadoSoma = calcular(3, 5, somar);
  console.log("A soma de 3 com 5 é", resultadoSoma);

// Faça a subtração de dois números usando a função calcular

  const resultadoSubtracao = calcular(10, 5, subtrair);
  console.log(`A subtração de 10 e 5 é ${resultadoSubtracao}`);


// Faça a multiplicação de dois números usando a função calcular

  const resultadoMultiplica = calcular(2, 6, multiplicar);
  console.log(`A multiplicação de 2 e 6 é ${resultadoMultiplica}`);

// Faça a divisão de dois números usando a função calcular

  const resultadoDivisao = calcular(100, 5, dividir);
  console.log(`A divisão de 100 e 5 é ${resultadoDivisao}`);

// Faça a ordenação crescente de dois números usando a função calcular

  const ordenaCrescente = calcular(11, 7, ordenar);
  console.log(`Colocamos em ordem os números 11 e 7: ${ordenaCrescente}`);

// Volte nas funções e refatore-as na sintaxe ES6

  const falei = falar();
  console.log(falei);

console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Condicionais')

// CONDICIONAIS
// Uma estudante obteve as seguintes notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1

// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou!

  const media = calcularMedia(n1, n2, n3);

  /**if (media >= 7) {
    return "Você passou, e está aprovada.";
  } else {
    return "Você não passou, e está reprovada.";
  }*/
  const resultado = (media >= 7) ? 'aprovada' : 'reprovada';
  // condicao ? true: false
  
  console.log(`A estudante foi ${resultado}`);

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  name: 'Pikachu',
  type: 'elétrico',
  height: 40.6,
}

// Fazer destructuring e acessar os valores de objeto e pokemon

  const {nome, tipo, peso} = objeto;
  console.log(`O objeto ${nome} é feito de ${tipo} e pesa ${peso} kg.`);

  const {name, type, height} = pokemon;
  console.log(`Capturei o pokemon ${name} que tem tipo ${type} e altura ${height} cm.`);

console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

  const hoje = new Date();
  console.log(hoje);

// Outro exemplo de um objeto JavaScript é o Date.

  const dia = hoje.getDate();
  const mes = hoje.getMonth();
  const ano = hoje.getFullYear();

  console.log(dia, mes, ano);

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

  const nascimento = new Date(1995, 4, 03);
  console.log(`Nasci em ${nascimento}`);

// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

  const dataFormatada = hoje.toLocaleDateString('pt-BR');
  console.log(dataFormatada);

// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️


// Podemos usar o método toLocaleString para formatar a data


// Temos mais opções para formatar a data
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  const dataLonga = hoje.toLocaleDateString('pt-BR', options);
  console.log(dataLonga);

console.log('-----------------------------------------------------')
// ----------------------------------------------

const pessoa = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,

  fazerAniversario: () => pessoa.idade++ ,
  andar: (metrosCaminhados) => {
    pessoa.andando = true
    pessoa.caminhouQuantosMetros += metrosCaminhados
  },

  parar: () => pessoa.andando = false,

  apresentacao: () => {  
    const anos = (pessoa.idade === 1) ? 'ano' : 'anos';
    const metros = (pessoa.caminhouQuantosMetros <= 1) ? 'metro' : 'metros';
  
    return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, 
    ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei 
    ${pessoa.caminhouQuantosMetros} ${metros}!`
  }
}
  pessoa.andar(200);
  console.log(pessoa.apresentacao());

/**pessoa.nomeCompleto = function () {
  return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}.`
}

pessoa.mostrarIdade = function () {
  return `Olá, eu tenho ${pessoa.idade} anos.`
}

pessoa.mostrarPeso = function () {
  return `Eu peso ${pessoa.peso}.`
}

pessoa.mostrarAltura = function () {
  return `Minha altura é ${pessoa.altura}.`
}

pessoa.mostrarDistancia = function () {
  return `${pessoa.nome} caminhou ${pessoa.caminhouQuantosMetros}m.`
}*/


// Vamos utilizar o formato ES6 para refatorar a constante pessoa.

// Quero criar as variáveis pessoa2 e pessoa3 com as mesmas propriedades, mas alterando os valores de nome, sobrenome, altura e peso

const pessoa2 = {
  nome: 'Cintia',
  sobrenome: 'Yamamoto',
  idade: 35,
  altura: 1.6,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,

  fazerAniversario: () => this.idade++ ,
  andar: (metrosCaminhados) => {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },

  parar: () => this.andando = false,

  apresentacao: () => {  
    const anos = (this.idade === 1) ? 'ano' : 'anos';
    const metros = (this.caminhouQuantosMetros <= 1) ? 'metro' : 'metros';
  
    return `Olá, eu sou ${pessoa2.nome} ${pessoa2.sobrenome}, tenho ${this.idade} ${anos}, 
    ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei 
    ${this.caminhouQuantosMetros} ${metros}!`
  }
}

pessoa2.andar(100);
console.log(pessoa2.apresentacao());


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Pessoa







console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5]

// Acessando elementos pela posição do array







// Informe o tamanho de cada array







// Faça a desestruturação do array







// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const db = require('./db')






console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()







console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console.







console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.







console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]

const comparar = (a, b) => {
  if (a < b) { // primeiro vem b e depois vem a
    return -1
  } else if (a > b) { // mantenho a como primeiro e b vem depois
    return 1
  } else { // se a e b forem iguais, mantém a mesma ordem
    return 0
  }
}

// Refatore a função comparar e ordene numbers em ordem crescente







// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)








console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers







// Some a quantidade de netos que vovó possui.







// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')