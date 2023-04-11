// APRENDIENDO JS

console.log("Hola mundo desde script.js");

console.log(56723542, "hola", true); // que guay, puedo hacer console.log de multiples valores

/*
Esto
es un 
comentario
de multiples
lineas
*/


// Declaracion de variable (unicamente la estoy creando)
let myHobby; 

console.log(myHobby)

// let myHobby;

// Inicialización de variable (darle un valor inicial)

myHobby = "Videojuegos"
console.log(myHobby)

myHobby = "Deportes"
console.log(myHobby)



let myOtherHobby = "Leer"
console.log(myOtherHobby)


// Usar el valor de una variable para usarlo en otra
let hobbyCopy = myOtherHobby;



// cosas que no podemos o no debemos hacer para nombrar variables

// let 1fruta; // NO
// let fruit1; // SI

// let import;
// let break;


// let micomidafavoritadelosdiaslunes;

// camelcasing
let miComidaFavoritaDeLosDiasLunes;


// CONST => constantes. Su valor nunca va a cambiar.

const myAge = 30;

// myAge = 32;

// const myBirthdate; // todas las const tienen que ser inicializadas



// VAR => obsoleta

// permite hoisting
// var es una palabra reservada para crear variables antes de ES6
// fue reemplazada por let y const
// var esencialmente no se debe usar



// Tipos de data y la palabra reservada typeof

let variable1 = "Hola";
console.log(variable1, typeof variable1)

let variable2 = 462937462;
console.log(variable2, typeof variable2)

let variable3 = true;
console.log(variable3, typeof variable3)

let variable4 = undefined;
console.log(variable4, typeof variable4)

let variable5 = null;
console.log(variable5, typeof variable5) // es un bug. NULL si es un tipo de data especifico, similar a undefined.

let variable6 = () => {};
console.log(variable6, typeof variable6) // function segun typeof es un tipo de data, pero internamente en JS, está basado en tipo Objeto

let variable7 = [];
console.log(variable7, typeof variable7)

let variable8 = {};



// STRINGS

let fruit1 = "pera";
let fruit2 = "manzana";
let fruit3 = "tomate";


let recipe = "La receta para el smoothie es: " + fruit1 + ", " + fruit2 + " y " + fruit3;

console.log(recipe);

// interpolación de strings => `` backticks

let recipeBetter = `La receta para el smoothie es: ${fruit1}, ${fruit2} y ${fruit3}`;
console.log(recipeBetter)


// INDICES

let simpleWord = "holagiqbwjhabjdgeygeiygfigyaifg";
//                ||||
//                0123

// notación de corchetes
console.log( simpleWord[0] )
console.log( simpleWord[3] )

console.log( simpleWord.charAt(0) ) // otra forma de acceder a caracteres

// propiedad length => cantidad de caracteres en un string

console.log( simpleWord.length )

console.log( simpleWord[ simpleWord.length - 1 ] )

// indexOf => para buscar la posición de un caracter

console.log( simpleWord.indexOf("e") )

// Otros metodos de strings

let longWord = "bananaramawakawakaehehsamirarami"


// slice => hace una copia de una sección del string

console.log( longWord.slice(0, 6) )
console.log( longWord.slice(12, 16) )

let strSlice = longWord.slice(12, 16)

// console.log( strSlice.toUpperCase() )

let strSliceUpperCase = strSlice.toUpperCase()


console.log( strSliceUpperCase.repeat(20) )

// o encadenar metodos
// console.log( longWord.slice(12, 16).toUpperCase().repeat(20) )

let name = "bob";

let nameCapitalized = name[0].toUpperCase() + name.slice(1)

console.log(nameCapitalized)



