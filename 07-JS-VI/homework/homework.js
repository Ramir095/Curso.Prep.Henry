// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
  // nombre al ser un string puedo aplicarle el toUpperCase que hace mayuscula la primer letra. 
  // con slice llamo al resto de las letras para unirlas a la M
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function(acc, elemento){
    return acc + elemento;
  }, 0);
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    cb(elemento);//elemento es como "i", osea es cada numero del array (cada valor)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = [];
  array.map(function(elemento){
    nuevoArray.push(cb(elemento));
  })
  return nuevoArray;
// constante array1 = [1.2.3.4.5].map(funcion(1)){
// retorno function(1){
//    return 1 * 1; ----> 4
//      }
//}


//array1 = [1.4.9.....]
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var resultado = array.filter(function(elemento){ //filter ya te devuelve el resultado dentro de un array
    return elemento[0] === "a" //es como un if sin poner el if
  })
  return resultado;
  //RECORDA! El argumento "elemento" es como la i del for, osea pasa a ser cada elemento del array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
