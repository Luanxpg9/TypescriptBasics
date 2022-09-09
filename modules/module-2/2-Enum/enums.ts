//#region Simple Enum
console.log("\n---------------------");
console.log("Numeric Enumerator\n");

enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);
//#endregion

//#region String Enum
console.log("\n---------------------");
console.log("String Enumerator\n");

enum Dia {
  Segunda = "Seg",
  Terca = "TER",
  Quarta = "QUA",
  Quinta = "QUI",
  Sexta = "SEX",
  Sabado = "SAB",
  Domingo = "DOM",
}

console.log(Dia);
console.log("Segunda: " + Dia.Segunda);
//#endregion

//#region Const Enum
console.log("\n---------------------");
console.log("Const Enumerator\n");

const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Bife,
}

function comida(c: Comida) {
  return "Comida muito apetitosa!";
}

console.log(comida(Comida.Pizza));

//#endregion
