"use strict";
//#region Variables
console.log("---------------------------------");
console.log("Variáveis\n");
let nome = '1';
console.log(nome);
//#endregion
//#region Arrays
console.log("---------------------------------");
console.log("Arrays\n");
let animais = ['Elefante', 'Gato', 'Cachorro', 'Panda'];
console.log(animais);
//#endregion
//#region Objects
console.log("---------------------------------");
console.log("Objetos\n");
let carro;
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2021, preco: 80000 };
console.log(carro);
//#endregion
//#region Functions
console.log("---------------------------------");
console.log("Funções\n");
function multiplicarNumeros(num1, num2) {
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
let isTarefaConcluida = Math.random() > 0.5;
isTarefaConcluida ? console.log('Tarefa concluida com sucesso') : console.log('Tarefa pendente');
// #endregion
//#region Number & Bigint
console.log("---------------------------------");
console.log("Number e BigInt\n");
let num1 = 3.141592653589793; // number
let num2 = 0x37CF; // hex
let num3 = 0o377; // octal
let num4 = 0b111001; // bin
console.log('Float:\t\t' + num1);
console.log('Hex:\t\t' + num2);
console.log('Octal:\t\t' + num3);
console.log('Bin:\t\t' + num4);
/* Funciona apenas para ES2020 ou posterior */
console.log("---------------------------------");
let big1 = 9007199254740995n;
// bin
let big2 = 9007199254740995n;
// hex
let big3 = 0x20000000000003n;
// octal
let big4 = 9007199254740995n;
console.log('Float:\t' + big1);
console.log('Bin:\t' + big2);
console.log('Hex:\t' + big3);
console.log('Octal:\t' + big4);
//#endregion
//#region String
console.log("---------------------------------");
console.log("String\n");
let animal = 'Elefante';
console.log(animal);
let primeiroNome = 'André'; // Single cotes
let segundoNome = "Fernandes"; // Double cotes
let nomeCompleto = `${primeiroNome} ${segundoNome}`; // Back Ticks
console.log(nomeCompleto);
//#endregion
//#region Array Operations
console.log("---------------------------------");
console.log("Array\n");
// Utilizando Colchetes
let frutas = ['Abacaxi', 'Laraja', 'Maçã', 'Banana', 'Manga'];
frutas = frutas.sort();
console.log(frutas);
console.log();
// Utilizando Array Object
let frutas2 = ['Abacaxi', 'Laraja', 'Maçã', 'Banana', 'Manga'];
console.log('Before shuffle ==>\t', frutas2);
function Shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let swap = array[i];
        let randomPos = Math.floor(Math.random() * array.length);
        array[i] = array[randomPos];
        array[randomPos] = swap;
    }
    return array;
}
Shuffle(frutas2);
console.log('Shuffled ==>\t\t', frutas2);
//#endregion
//#region Tuples
console.log("---------------------------------");
console.log("Tuplas\n");
// Tupla simples
console.log("Tupla simples");
let pessoa; // Nome, cargo, idade
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa, '\n');
// Tupla com Spread Operator
console.log("Tupla com Spread Operator");
let listaFrutas;
listaFrutas = ['Abacaxi', 'Banana', 'Goiaba', 'Pera', 'Melancia'];
console.log(...listaFrutas, '\n');
// Tupla com label
console.log("Tupla com label");
let pessoa2;
pessoa2 = ['Luan Barbosa', 'Programador Junior', 25];
console.log(pessoa2, '\n');
// Lista Heterogênea de Tupla
console.log("Lista Heterogênea de Tupla");
let listaFrutas2;
listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2, '\n');
// Função com Tupla
console.log('Função com Tupla');
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Glaucia', 'Luan'], [34, 24]);
console.log(resultado, '\n');
// Labeled Tuples com Spread Operator numa função
console.log('Labeled Tuples com Spread Operator numa função');
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Luan', 'Barbosa'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));
//#endregion
//#region Enums
//#endregion
