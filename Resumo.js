/**
 * ESTRUTURAS BÁSICAS EM JAVASCRIPT
 */
// Operador de Igualdade (==):

// Compara se os valores de duas expressões são iguais.
// Não leva em consideração o tipo das variáveis.
// Exemplo: if (a == b) { /* Código */ } - Isso é verdadeiro se a e b tiverem valores iguais, mesmo que sejam de tipos diferentes.
// Operador de Estrita Igualdade (===):

// Compara se os valores e os tipos de duas expressões são iguais.
// Exemplo: if (a === b) { /* Código */ } - Isso é verdadeiro se a e b tiverem valores e tipos iguais.
// Operador Lógico OU (||):

// Retorna verdadeiro se pelo menos uma das expressões for verdadeira.
// Exemplo: if (a || b) { /* Código */ } - Isso é verdadeiro se a ou b (ou ambos) forem verdadeiros.
// Operador de Multiplicação (*):

// Realiza a multiplicação de dois números.
// Exemplo: const resultado = a * b; - O valor de resultado é o produto de a e b.
// Operador de Atribuição (=):

// Atribui um valor à variável à esquerda.
// Exemplo: const a = 42; - Atribui o valor 42 à variável a.
// Operador de Adição (+):

// Realiza a adição de dois números ou concatena strings.
// Exemplo: const soma = a + b; - Se a e b forem números, soma conterá a soma. Se forem strings, soma conterá a concatenação.
// Operador de Subtração (-):

// Realiza a subtração de dois números.
// Exemplo: const diferenca = a - b; - O valor de diferenca é a diferença entre a e b.

// Criação de um Objeto Literal
const pessoa = {
    nome: "João",
    idade: 30,
  };
  
  // Propriedades do Objeto Literal
  console.log(pessoa.nome); // Acessando a propriedade 'nome'
  
  // Coleção de Objetos Literais
  const pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
  ];
  
  // Estruturas Condicionais
  if (condicao) {
    // Código a ser executado se a condição for verdadeira
  } else if (outraCondicao) {
    // Código a ser executado se a outra condição for verdadeira
  } else {
    // Código a ser executado se nenhuma condição for verdadeira
  }
  
  switch (valor) {
    case opcao1:
      // Código a ser executado se valor for igual a opcao1
      break;
    case opcao2:
      // Código a ser executado se valor for igual a opcao2
      break;
    default:
      // Código a ser executado se valor não corresponder a nenhuma opção
  }
  
  // Input
  // Para obter input do usuário, você pode usar a biblioteca readline-sync ou métodos de entrada do navegador.
  
  // Usando a biblioteca readline-sync
  const readline = require("readline-sync");
  const input = readline.question("Digite algo: ");
  console.log("Você digitou:", input);
  
  // Converter Strings para Números
  const stringNumero = "42";
  const numero = Number(stringNumero);
  
  /**
   * ESTRUTURAS DE REPETIÇÃO
   */
  
  // Estrutura While
  while (condicao) {
    // Código a ser repetido enquanto a condição for verdadeira
  }
  
  // Estrutura Do/While
  do {
    // Código a ser repetido pelo menos uma vez
  } while (condicao);
  
  // Estrutura For
  for (let i = 0; i < 5; i++) {
    // Código a ser repetido
  }
  
  // Estrutura For...In (itera sobre as propriedades de um objeto)
  for (const propriedade in objeto) {
    // Código a ser executado para cada propriedade do objeto
  }
  
  // Estrutura For...Of (itera sobre elementos iteráveis, como arrays)
  for (const elemento of array) {
    // Código a ser executado para cada elemento do array
  }
  
  /**
   * MANIPULAÇÃO DE STRINGS
   */
  
  // Propriedades
  const tamanhoDaString = "Exemplo".length;
  
  // Métodos
  const texto = "  Exemplo de Texto  ";
  const textoEmMaiusculas = texto.toUpperCase();
  const textoSemEspacos = texto.trim();
  const textoPadEsquerda = texto.padStart(20, "-");
  const textoSubstituido = texto.replace("Exemplo", "Novo Exemplo");
  const parteDaString = texto.substring(0, 7);
  const posicao = texto.indexOf("de");
  const partes = texto.split(" ");
  
  /**
   * MANIPULAÇÃO DE DATAS
   */
  
  // Criar uma Data em JavaScript
  const dataAtual = new Date();
  
  // Métodos Getters
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1; // Janeiro é 0, então somamos 1.
  const ano = dataAtual.getFullYear();
  
  // Métodos Setters
  dataAtual.setFullYear(ano + 1);
  
  /**
   * FUNÇÕES EM JAVASCRIPT
   */
  
  // Funções sem Parâmetros
  function saudacao() {
    return "Olá, Mundo!";
  }
  
  // Funções com Parâmetros
  function soma(a, b) {
    return a + b;
  }
  
  // Arrow Functions
  const multiplicacao = (a, b) => a * b;
  
/**
 * OPERAÇÕES COMUNS EM ARRAYS EM JAVASCRIPT
 */

// Criação de um array de exemplo
const frutas = ["Maçã", "Banana", "Morango"];

// push - Adiciona um elemento ao final do array
frutas.push("Pêra");
// Agora o array frutas contém: ["Maçã", "Banana", "Morango", "Pêra"]

// splice - Remove ou substitui elementos em uma posição específica
frutas.splice(1, 1); // Remove o elemento na posição 1 (Banana)
// Agora o array frutas contém: ["Maçã", "Morango"]

// pop - Remove o último elemento do array
const ultimoElemento = frutas.pop(); // Remove e retorna "Morango"
// Agora o array frutas contém: ["Maçã"]

// shift - Remove o primeiro elemento do array
const primeiroElemento = frutas.shift(); // Remove e retorna "Maçã"
// Agora o array frutas contém: []

// forEach - Itera sobre os elementos do array
frutas.forEach((fruta, indice) => {
  console.log(`Índice ${indice}: ${fruta}`);
});

// map - Cria um novo array transformando cada elemento
const numeros = [1, 2, 3, 4];
const numerosDobrados = numeros.map((numero) => numero * 2);
// O array numerosDobrados contém: [2, 4, 6, 8]

// filter - Cria um novo array com elementos que atendem a uma condição
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// O array numerosPares contém: [2, 4]

// reduce - Reduz um array a um único valor
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// A variável soma contém: 10

// sort - Ordena os elementos de um array (por padrão, em ordem alfabética)
const animais = ["Gato", "Cachorro", "Elefante", "Tigre"];
animais.sort();
// O array animais é ordenado alfabeticamente: ["Cachorro", "Elefante", "Gato", "Tigre"]