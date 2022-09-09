//#region Simple Enum
console.log("\n---------------------");
console.log("Numeric Enumerator\n");

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}

console.log(Idioma);
//#endregion

//#region String Enum
console.log("\n---------------------");
console.log("String Enumerator\n");


enum IdiomaString {
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    Ingles = 'EN',
    Frances = 'FR'
}

console.log(IdiomaString);
console.log("Portuguese: " + IdiomaString.Portugues)
//#endregion


