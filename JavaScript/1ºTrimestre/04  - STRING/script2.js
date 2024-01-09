// 3 formas de declarar string
let producto1 = "monitor 20 pulgadas";
let producto2 = String("monitor 24 pulgadas");
let producto3 = new String("monitor 32 pulgadas");

console.log(producto1);
console.log(producto2);
console.log(producto3);

// Utilidades de usar comillas simples
console.log("Uso de comillas simples");
producto1 = 'monitor 20" ';
console.log(producto1);

// Forma de usar comillas dobles dentro de las comillas, usando el escape
console.log("Usando comillas con escape");
producto1 = "monitor 20\" ";
console.log(producto1);

// Propiedad length
console.log("Propiedad length");
console.log(producto1.length);

// Método include
console.log("Método include");
console.log(producto1.includes("monitor"));
console.log(producto1.includes("Monitor"));
console.log(producto1.includes("mono"));

// Método indexOf
console.log("Método indexOf");
console.log(producto2.indexOf("p"));
console.log(producto1.indexOf("m"));
console.log(producto1.indexOf("2"));
console.log(producto1.indexOf("z"));

// Concatenación de string
console.log("Concatenación de String");
let precio = "40 €";

console.log("El producto " + producto2 + " cuesta: " + precio);
console.log("El producto " , producto2 , " cuesta: " , precio);

// Template strings
console.log("Template strings");
console.log(`El producto ${producto2} cuesta: ${precio}`);

// Eliminar espacios en blanco
console.log("Eliminar espacios en blanco");

let correo = " lala@gmail.com ";
console.log(correo);

console.log(correo.trimStart());
console.log(correo.trimEnd());

console.log(correo.trimStart().trimEnd());

console.log(correo.trim());

// Uso de replace para reemplazar
console.log("Uso de replace para reemplazar");
let frase = "Erase una vez";
console.log(frase.replace("Erase","Solo"));

// Recortar Slice o substring
console.log("Recortar slice o substring");
console.log(frase.substring(2));
console.log(frase.substring(6,9));

// Recortar un solo caracter
console.log("Recortar solo un caracter");
console.log(frase.charAt(6));
console.log(frase.substring(6,7));

// Repeat
console.log("Repeat");
let coche = " peugeot 207";
console.log(coche.repeat(2));

// Slice por un carácter
console.log("Slice por un caracter");
let ciclos = "daw, dam, asir";
console.log(ciclos.split(","));

// Conversión a mayus / minus
console.log("Conversión mayus/minus");
let email = "CORREO@GMAIL.COM";
console.log(email.toLowerCase());

let nombre = "laura";
console.log(nombre.toUpperCase());

// Conversión a string
let precios = 300;
console.log(precios.toString());


