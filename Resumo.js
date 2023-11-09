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

// Título: Aplicação em Camadas

// Resumo:
// Uma aplicação em camadas é uma arquitetura de software que organiza um sistema em diferentes níveis de abstração, cada um desempenhando um papel específico e interagindo de forma bem definida. Isso promove a modularidade, facilita a manutenção e o desenvolvimento de software escalável. Em JavaScript, esse conceito pode ser aplicado de várias maneiras, dependendo da complexidade do projeto.

// Camadas da Aplicação: A aplicação em camadas pode ser dividida em várias camadas, como a camada de apresentação (interface do usuário), camada de lógica de negócios e camada de armazenamento de dados. No caso do JavaScript, a camada de apresentação frequentemente envolve HTML, CSS e frameworks de frontend, enquanto a lógica de negócios pode ser implementada usando JavaScript no frontend (como no Node.js) e no backend (usando Node.js, Express.js, etc.). A camada de armazenamento de dados pode se conectar a bancos de dados usando bibliotecas como o Mongoose (para MongoDB) ou o Sequelize (para bancos de dados SQL).

// Benefícios da Abordagem em Camadas: A aplicação em camadas traz diversos benefícios, como a separação de responsabilidades (cada camada tem um propósito claro), facilidade na manutenção (alterações em uma camada não afetam necessariamente as outras) e escalabilidade (é possível adicionar ou remover camadas conforme necessário).

// Exemplo de Implementação: Um exemplo prático de aplicação em camadas em JavaScript pode ser uma aplicação web que consiste em um frontend (camada de apresentação) construído com HTML, CSS e JavaScript (usando um framework como React) que se comunica com um backend (camada de lógica de negócios) baseado em Node.js e Express.js. O backend, por sua vez, pode acessar um banco de dados (camada de armazenamento de dados) para armazenar e recuperar informações.

// Anotações:

// Organização de Código: A aplicação em camadas é uma ótima maneira de organizar seu código. Certifique-se de que o código relacionado à interface do usuário, à lógica de negócios e ao acesso a dados esteja separado e coeso em suas respectivas camadas.

// Padrões de Design: Ao implementar uma aplicação em camadas, é útil considerar padrões de design, como o Modelo-Visão-Controlador (MVC) ou o Modelo-Visão-ViewModel (MVVM), para ajudar na estruturação do código e na separação de preocupações.

// Comunicação entre Camadas: A comunicação eficaz entre as camadas é fundamental. Use APIs RESTful, chamadas AJAX, ou WebSocket para permitir que as camadas se comuniquem entre si.

// Segurança: Certifique-se de aplicar práticas de segurança adequadas em cada camada, especialmente ao lidar com dados confidenciais. Valide e sanitize dados, proteja contra injeções SQL e evite expor informações sensíveis no frontend.

// Escalabilidade: A aplicação em camadas permite que você dimensione seu sistema de acordo com as necessidades. Ao adicionar ou remover servidores, serviços ou instâncias de banco de dados, você pode facilmente dimensionar a camada apropriada.

// Ferramentas e Frameworks: Existem muitas bibliotecas e frameworks disponíveis em JavaScript para ajudar na implementação de cada camada, como React, Vue.js, Angular, Node.js, Express.js, e vários outros. Escolha as ferramentas que melhor atendam às necessidades do seu projeto.

// REACT

// 1. Criar um componente:
// Um componente React é uma parte reutilizável de uma interface de usuário. Aqui está um exemplo simples de como criar um componente:


// import React from 'react';
// class MeuComponente extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Meu Primeiro Componente React</h1>
//         <p>Este é um componente React simples.</p>
//       </div>
//     );
//   }
// }

// export default MeuComponente;

// // Neste exemplo, MeuComponente é um componente React que renderiza um título e um parágrafo.
// // 2. Exportar um componente:
// // Para tornar um componente acessível em outros arquivos, você precisa exportá-lo. O export pode ser feito no final do arquivo:


// export default MeuComponente;

// // Isso permite que outros arquivos importem e usem o componente.

// // 3. Importar um componente:
// // Para usar o componente exportado em outro arquivo, você pode importá-lo da seguinte forma:


// import React from 'react';
// import MeuComponente from './MeuComponente';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MeuComponente />
//         <p>Outro conteúdo da aplicação.</p>
//       </div>
//     );
//   }
// }

// export default App;
// // App;
// // Neste exemplo, MeuComponente é importado e usado dentro do componente App.

// // 4. Estilizar utilizando CSS:
// // Você pode estilizar componentes React usando CSS. Aqui está um exemplo de como aplicar estilos a um componente:


// import React from 'react';
// import './MeuComponente.css'; // Importa um arquivo CSS externo

// class MeuComponente extends React.Component {
//   render() {
//     return (
//       <div className="meu-componente">
//         <h1>Meu Primeiro Componente React</h1>
//         <p className="paragrafo">Este é um componente React simples.</p>
//       </div>
//     );
//   }
// }

// export default MeuComponente;

// // Neste exemplo, um arquivo CSS externo chamado MeuComponente.css é importado e as classes CSS são aplicadas aos elementos do componente.