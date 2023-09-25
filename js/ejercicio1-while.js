// #Ejercicio 1
// Solicitar al usuario un número a través de un prompt
// empezando desde 1 e ir incrementando este valor de a 1
// A medida que recorremos todos los números enteros anterior e incluído el ingresado por el usuario quiero hacer un log de aquellos números que son multiplos de 7
// El log debe ser el siguiente
// *El número X es multiplo de 7


// const numeroIngresado = parseInt( prompt("Ingrese un número para calcular sus múltiplos") )
// let numero =  1;

// while(  numero <= numeroIngresado   ) {
    
//     if( numero % 7 === 0  ) {
//         console.log(`El número ${numero} es multiplo de 7`)
//     }

//     numero++
// }







// #Ejercicio 2
/*
    - Solicitar a una maestra que ingresa las calificaciones de sus alumnos
    - Pedir constantemente las notas hasta que la maestra ingrese un 0 como valor En ese momento saldremos de nuestro bucle e imprimiremos el promedio del curso según las notas ingresadas/     
    
    !Tener en cuenta que cuando presione 0 no afecte al promedio de notas.

    NO ESTA BIEN: ( 10 + 10 + 10 + 0 ) /  4 = 7,5
    #ESTA BIEN: ( 10 + 10 + 10) /  3 = 10
*/ 

let nota = parseInt(  prompt("Ingrese la calificación del alumno 2")  );
let cantidadNotas = 0;
let acumuladoNotas = 0;

do {

    if(nota > 0) {
        cantidadNotas++;
        acumuladoNotas += nota;
    }
    
    nota = parseInt(prompt("Ingrese la calificación del alumno"));
}while(nota !== 0);

const promedio = acumuladoNotas/cantidadNotas 

console.log(`El promedio de notas es de: ${promedio}`)