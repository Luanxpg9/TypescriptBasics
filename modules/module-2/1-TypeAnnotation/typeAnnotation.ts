//#region Variables
console.log("---------------------------------");
console.log("Variáveis\n");

const nome: string = "1";
console.log(nome);

//#endregion

//#region Arrays
console.log("---------------------------------");
console.log("Arrays\n");

const animais: string[] = ["Elefante", "Gato", "Cachorro", "Panda"];
console.log(animais);

//#endregion

//#region Objects
console.log("---------------------------------");
console.log("Objetos\n");

let carroObject: {
  nome: string;
  ano: number;
  preco: number;
};

carroObject = { nome: "Toyota Yaris Sedan XS", ano: 2021, preco: 80000 };
console.log(carroObject);

//#endregion

//#region Functions
console.log("---------------------------------");
console.log("Funções\n");

function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumeros(12, 10));

//#endregion

//#region Boolean
console.log("---------------------------------");
console.log("Boolean\n");
/* Lembrando que Boolean != de boolean
 * Boolean é um objeto do javascript
 * é recomendado utilizar o boolean pois é um tipo primitivo.
 */

const isTarefaConcluida: boolean = Math.random() > 0.5;
isTarefaConcluida
  ? console.log("Tarefa concluida com sucesso")
  : console.log("Tarefa pendente");

// #endregion

//#region Number & Bigint
console.log("---------------------------------");
console.log("Number e BigInt\n");

const num1: number = 3.141592653589793; // number
const num2: number = 0x37cf; // hex
const num3: number = 0o377; // octal
const num4: number = 0b111001; // bin

console.log("Float:\t\t" + num1);
console.log("Hex:\t\t" + num2);
console.log("Octal:\t\t" + num3);
console.log("Bin:\t\t" + num4);

/* Funciona apenas para ES2020 ou posterior */
console.log("---------------------------------");
const big1: bigint = 9007199254740995n;
// bin
const big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
// hex
const big3: bigint = 0x20000000000003n;
// octal
const big4: bigint = 0o400000000000000003n;

console.log("Float:\t" + big1);
console.log("Bin:\t" + big2);
console.log("Hex:\t" + big3);
console.log("Octal:\t" + big4);

//#endregion

//#region String
console.log("---------------------------------");
console.log("String\n");

const animal: string = "Elefante";
console.log(animal);

const primeiroNome: string = "André"; // Single cotes
const segundoNome: string = "Fernandes"; // Double cotes
const nomeCompleto: string = `${primeiroNome} ${segundoNome}`; // Back Ticks

console.log(nomeCompleto);

//#endregion

//#region Array Operations
console.log("---------------------------------");
console.log("Array\n");

// Utilizando Colchetes
let frutas: string[] = ["Abacaxi", "Laraja", "Maçã", "Banana", "Manga"];
frutas = frutas.sort();

console.log(frutas);
console.log();

// Utilizando Array Object
const frutas2: Array<string> = ["Abacaxi", "Laraja", "Maçã", "Banana", "Manga"];

console.log("Before shuffle ==>\t", frutas2);

function Shuffle(array: any) {
  for (let i: number = 0; i < array.length; i++) {
    const swap = array[i];
    const randomPos: number = Math.floor(Math.random() * array.length);
    array[i] = array[randomPos];
    array[randomPos] = swap;
  }

  return array;
}

Shuffle(frutas2);

console.log("Shuffled ==>\t\t", frutas2);

//#endregion

//#region Tuples
console.log("---------------------------------");
console.log("Tuplas\n");

// Tupla simples
console.log("Tupla simples");

let pessoa: [string, string, number]; // Nome, cargo, idade
pessoa = ["Glaucia Lemos", "Cloud Advocate JavaScript", 34];

console.log(pessoa, "\n");

// Tupla com Spread Operator
console.log("Tupla com Spread Operator");

let listaFrutas: [string, ...string[]];
listaFrutas = ["Abacaxi", "Banana", "Goiaba", "Pera", "Melancia"];

console.log(...listaFrutas, "\n");

// Tupla com label
console.log("Tupla com label");

let pessoa2: [nome: string, posicao: string, idade: number];
pessoa2 = ["Luan Barbosa", "Programador Junior", 25];

console.log(pessoa2, "\n");

// Lista Heterogênea de Tupla
console.log("Lista Heterogênea de Tupla");

let listaFrutas2: [number, boolean, ...string[]];
listaFrutas2 = [5, true, ...listaFrutas];

console.log(listaFrutas2, "\n");

// Função com Tupla
console.log("Função com Tupla");

function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades];
}

const resultado = listarPessoas(["Glaucia", "Luan"], [34, 24]);
console.log(resultado, "\n");

// Labeled Tuples com Spread Operator numa função
console.log("Labeled Tuples com Spread Operator numa função");

type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeDoMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa("Luan", "Barbosa"));
console.log(criarPessoa("Glaucia", "de Souza", "Lemos"));

//#endregion
