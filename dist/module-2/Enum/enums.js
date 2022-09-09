"use strict";
console.log("\n---------------------");
console.log("Simple Enumerator\n");
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
console.log("\n---------------------");
console.log("String Enumerator\n");
var IdiomaString;
(function (IdiomaString) {
    IdiomaString["Portugues"] = "PT-BR";
    IdiomaString["Espanhol"] = "ES";
    IdiomaString["Ingles"] = "EN";
    IdiomaString["Frances"] = "FR";
})(IdiomaString || (IdiomaString = {}));
console.log(IdiomaString);
console.log("Portuguese: " + IdiomaString.Portugues);
