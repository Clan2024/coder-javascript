//condicionales -> sirve para el control del flujo de codigo
// condicion simple

//if(aca va la condicion){aca lo que queremos que se ejecute si el resultado es verdadero}
//let nombre = prompt ("Ingrese su nombre"); 



//== Tiene que ser igual, el tipo de dato puede cambiar

//if (nombre == "Matias") {
//    console.log("la condicion es verdadera");
//}



// === Tiene que ser igual el valor y el tipo de dato

//let edad = parseInt(prompt("Ingrese su edad"));

//if (edad === 26) {
//    console.log ("la condicion es verdadera");
//}



// != tiene que ser diferente al valor que d en el prompt 

//let edad= parseInt(prompt("Ingrese su edad"))

//if (edad != 26) {
//    console.log ("la condicion es falsa")
//}



// && --> y aplica dos condiciones

//let edad = prompt("Ingrese su edad");

//if (edad >= 18 && edad < 60){
//    console.log("la condicion es verdadera");
//}



//|| --> el operador OR si al menos una de las condiciones es verdadera
//let nombre = prompt("Ingresa tu nombre")

//if (nombre !="Brian" || nombre =="Gisele"){
//    console.log (nombre);
//}


// else --> uso de else, si cumple con la condicion entra  a la pagina si no la cumple

// let nombre = prompt ("Ingrese su nombre")
//if (nombre != "Brian" || nombre == "Gisele" ){
//  console.log(nombre);
//} 
//else {
//   console.log ("Usted no tiene permitido el ingreso a esta web")
//}


//let nombre =prompt ("Ingrese su nombre")

//if(nombre != "Brian" && nombre !="Paula") {
//      console.log(nombre);
//   } else if (nombre =="Paula") {
//console.log("Usted no tiene permitido el ingreso a esta web");
//}
//else {   console.log ("No puedes entrar")
//}

// con el fin de que javascript no tome en cuenta las mayusculas y minusculas, utilizo metodos de strings, los principales son --> toLowerCase() esto transforma todo el titulo en minuscula.


//let nombre =prompt ("Ingrese su nombre").toLowerCase();

//if(nombre != "brian" && nombre !="paula") {
//      console.log(nombre);
//   } else if (nombre =="paula") {
//console.log("Usted no tiene permitido el ingreso a esta web");
//}
//else {   console.log ("No puedes entrar")
//}

// switch se usa para evaluar condiciones de igualdad

//let nombre = prompt("Ingrese su nombre").toLowerCase();

//switch (nombre) {
//   case "brian":
//      console.log ("Usted no tiene permitido el ingreso a esta web");
//      break;
//   case "german":
//      console.log ("No puedes entrar")
//   break;

//   default: // es como el else
//      console.log(nombre);
//      break;
//}

// esto permite repetir un ciclo varias veces

//let contador = 1;

//for (let i = 0; i < 5; i++) {

//   console.log("Hay " + contador  + " alumnos")
//   contador++

//}

//let condicion = true;

//while (condicion) {
//   let nombre = prompt("Ingrese su nombre").toLowerCase();

//   if (nombre == "jeremias") {
//     console.log("no");
//   } else {
//      console.log ("Bienvenida " + nombre)
//   break;

//   }
//}

//funciones --> Bloque de codigo diseñado para realizar una unica tarea que podemos reutilizar en nuestro codigo
// lo primero es declararla

//function saludar(){
//cuerpo de la funcion
//   console.log("Hola, desde mi funcion");
//}

//llamar a la funcion

//saludar();




//function devolverLibro(titulo, diasRetraso = 0) {
//   const multa = diasRetraso * 0.50;
//   const mensaje = diasRetraso > 0 
//       ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
//       : "Devuelto a tiempo. No hay multa.";
//   console.log(`Libro "${titulo}": ${mensaje}`);
//}

//devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

//devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.


//function ahorroMensual(){

//let montoObjetivo= prompt("Ingrese su ahorro objetivo");
//let numeroDeMeses = prompt ("¿En cuanto tiempo desea llegar a su meta?");
//const ahorroMensual = numeroDeMeses / montoObjetivo


//console.log(`Debe ahorrar ${ahorroMensual} cada mes.`)
//}



/*let montoObjetivo = prompt("Ingrese su ahorro objetivo");
let numeroDeMeses = prompt("¿En cuanto tiempo desea llegar a su meta?");
const ahorroMensual = (montoObjetivo / numeroDeMeses);
let casoEspecifico = prompt (`¿Como describirias tu situacion financiera. Elije una de las siguientes opciones:

      1. Gasto alrededor del 50% de mi sueldo en mis necesidades

      2. Gasto alrededor del 70% de mi sueldo en mis necesidades

      3. Gasto alrededor del 90% de mi sueldo en mis necesidades`)


 if (ahorroMensual < (1000000)) 
   {
      alert(`Debe ahorrar $${ ahorroMensual} cada mes.`);

 } else if (ahorroMensual >= (1000000)) {
   prompt(`Debe ahorrar $${ ahorroMensual} cada mes. Este monto sobrepasa tu capacidad de ahorro mensual, te sugerimos realizar una simulacion de un monto menor o a mas meses

      Selecciona:

      1. Si quieres volver a intentarlo 
      2. Si quieres salir de la simulacion`);
 }
*/

/*
let montoObjetivo = prompt("Ingrese su ahorro objetivo");
let numeroDeMeses = prompt("¿En cuanto tiempo desea llegar a su meta?");
let sueldo = prompt (`¿cual es tu sueldo mensual?`) 
let casoEspecifico = prompt (`¿Como describirias tu situacion financiera? Elije una de las siguientes opciones:

      1. Gasto alrededor del 50% de mi sueldo en mis necesidades.

      2. Gasto alrededor del 70% de mi sueldo en mis necesidades.

      3. Gasto alrededor del 90% de mi sueldo en mis necesidades.`)
      
const ahorroMensual = (montoObjetivo/numeroDeMeses);

switch (casoEspecifico) {

   case `1`:
    
   
  case `2`:

  if (casoEspecifico == 2){
   alert (`Debe ahorrar $${ahorroMensual}, por un periodo de ${numeroDeMeses} meses`);
   }
 
   

   case `3`:
      if (casoEspecifico == 3){
         alert (`Debe ahorrar $${ahorroMensual}, por un periodo de ${numeroDeMeses} meses`);
         }
}

*/


/*let sueldo = prompt (`¿cual es tu sueldo mensual?`);
let porcentaje = prompt (`¿Cual porcentaje de tu sueldo estas dispuesto a ahorrar?`)
const porcentajeAhorro = ((sueldo*porcentaje)/100)
let montoObjetivo = prompt("Ingrese su ahorro objetivo");
let numeroDeMeses = prompt("¿En cuanto tiempo desea llegar a su meta?");
const ahorroMensual = (montoObjetivo/numeroDeMeses); 


if(ahorroMensual > porcentajeAhorro ){
   alert (`Tu porcentaje de ahorro restante $${ porcentajeAhorro} supera al porcentaje de ahorro mensual $${ ahorroMensual}, te sugerimos volver a intentarlo a un periodo de mas meses`)
}

 if(ahorroMensual < porcentajeAhorro) {
   alert (`Para lograr tu  meta deberias destinar $${ ahorroMensual} de tu capacidad de ahorro mensual $${ porcentajeAhorro}, por un periodo de ${numeroDeMeses} meses`)
 }

 else if (isNaN(ahorroMensual, sueldo, porcentaje, montoObjetivo, numeroDeMeses) || numero.trim() === "") {
   alert("¡Por favor, ingresa un número válido!");
    }

    let opcion = prompt("Gracias por usar nuestra app. Si deseas volver a intentarlo, ingresa 1. Si deseas salir, ingresa 2.");

    switch (casoEspecifico) {

      case `1`:
         if (casoEspecifico == 1){
            alert (sueldo);
            }
      
     case `2`:
   
     if (casoEspecifico == 2){
      alert (`Debe ahorrar $${ahorroMensual}, por un periodo de ${numeroDeMeses} meses`);
      }
    
      
   
      case `3`:
         if (casoEspecifico == 3){
            alert (`Debe ahorrar $${ahorroMensual}, por un periodo de ${numeroDeMeses} meses`);
            }
         }
*/




let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(indice);  // Salida: 2