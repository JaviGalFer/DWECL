let numero = 11;
let string1 = "Hola mundo";
let string2 = "Hola qué tal";

// Conversiones y consultas de tipos
console.log(numero.toString());
console.log(typeof(numero));
console.log(typeof(numero.toString()));

// Conversiones a mayus y minus
console.log(string1.toUpperCase());
console.log(string2.toLowerCase());


// Calcular longitud
console.log(string1.length);

// Concatenar
console.log(string1.concat(" aquí estoy"));

// Métodos de búsqueda que devuelve la posición indexOf == search 
console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("kk"));
console.log(string1.search("und"));
console.log(string1.search("kk"));

// Método de búsqueda lastIndexOf
console.log(string1.lastIndexOf("mundo"));
console.log(string1.match(/mundo/));

// Métodos de búsqueda substring
let string3 = "Hola qué tal va por allí";
console.log("método substring: " + string3.substring(1,6));
console.log(string3.charAt(1));
console.log(string3.substring(1,6));
console.log(string3.slice(1,2));


// Método include

console.log(string3.includes("tal"));
console.log(string3.includes("kk"));
console.log(string3.startsWith("ho"));
console.log(string3.startsWith("kk"));
console.log(string3.endsWith("allí"));

// Métodos de reemplazo
console.log(string3.replace("hola","adios"));

// Método
let correo = "      micorreo@g.educaand.es  ";
console.log(correo.length);
console.log(correo.trim().length);

// Métodos de conversion a array cuando hay un delimitador común
let var1 = "hola qué tal por allí";
let var2 = "18-45-56-67-78-89";
console.log(var1.split(" "));
console.log(var2.split("-"));
let array_numeros = var2.split("-");
console.log(array_numeros[2]);
