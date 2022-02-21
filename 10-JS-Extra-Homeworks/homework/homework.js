// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for(const ya in objeto){ //Fon in sive para recorres un objeto
    array.push([ya, objeto[ya]]); //al poner [] dentro de push, digo que sera un array
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(var i = 0; i < string.length; i++){
    if(objeto.hasOwnProperty(string[i])){ //el metodo hasOwnProperty devuelve un booleano indicando si el objeto tiene la propiedad especificada.
      objeto[string[i]]++;
    }
    else {
      objeto[string[i]] = 1;}
  }
  return objeto
  // var objeto = {}; 
  //   for(var i in string){
  //       objeto[string[i]] = ( objeto[string[i]] || 0) + 1; // Incrementamos el valor si el elemento ya existe
  //   }
  //   return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = [];
  var minusculas = [];
	for(var i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){//El método toUpperCase devuelve el valor de la cadena convertida a mayúsculas. toUpperCase no afecta al valor de la cadena en sí mismo. CON ESE METODO LO QUE HACEMOS ES COMPARAR LAS LETRAS DEL STRING CON LA MISMA LETRAS PERO EN MAYUSCULA
      mayusculas.push(s[i]);
    }
    else minusculas.push(s[i]);
  }
  //return mayusculas.join("") + minusculas.join("");
  return mayusculas.concat(minusculas).join(""); //El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  return str.split(" ").map(function(elemento){ //return retorna el resultado del return de adentro
    return elemento.split("").reverse().join("");
  }).join(" ") 
  
  //RECORDAR!!! se puede hacer la funcion toda junta!

  // ó tambien
  // var functionDeCallBack = function(elemento){
  // return elemento.split("").reverse().join("");
  // }
  // return str.split(" ").map(functionDeCallBack).join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero = numero.toString();
  var numeroDos = numero.split("").reverse().join("");
  if (numero === numeroDos){
    return "Es capicua";
  }
  else return "No es capicua";
  // if (numero - numero.toString().split("").reverse().join("") === 0){
  //   return "Es capicua"
  // }
	// return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newCadena = "";
  for(var i = 0; i < cadena.length; i++){
    if(cadena[i] != "a" && cadena[i] != "b" && cadena[i] != "c"){
      newCadena += cadena[i]
    }
  }
  return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevoArray = arr.sort(function(arr1, arr2){
    return arr1.length - arr2.length;
  })
  return nuevoArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
   var iguales = [];
   for(var i = 0; i < arreglo1.length; i++){
     for(var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        iguales.push(arreglo1[i])
      }
     }
   }
   return iguales;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

