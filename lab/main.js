

console.log(" 1- Tienes el siguiente objeto: ");

const ordenador1 = {

    marca: "HP",

    procesador: "i7",

    ram: "16Gb",

    HD: "1Tb",

    precio: 1500,

    extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],

    maletin: true,

}


console.log("mi ordenador es un " + ordenador1.marca + ", con procesador " + ordenador1.procesador + " y " + ordenador1.ram + " de RAM");


for (let propiedad in ordenador1){
    console.log(propiedad + ":"); 
    console.log(ordenador1[propiedad]);
  }


console.log(ordenador1.extras[2]);


console.log(" 2- Tenemos un objeto del super: ");


const galletas = {
  marca: "Artiach",
  nombre: "Chiquilín",
  descripción: "galletas de mantequilla",
  precio: 2.75,
  hayExistencias: false,
  };

  if (galletas.hayExistencias = true) {
    galletas.oferta = true;
  } else {
    galletas.oferta = false;
  }
  
console.log(galletas);


galletas.nombre = "Príncipe";

delete galletas.marca;

console.log(galletas);

console.log(Object.keys(galletas));
console.log(Object.values(galletas));

console.log(" Crear objetos que sean coches con sus características: marca, modelo, potencia, precio, etc: ");



let coches = [
  { marca: "Toyota", modelo: "Corolla", potencia: "150 HP", precio: "$25,000" },
  { marca: "Honda", modelo: "Civic", potencia: "140 HP", precio: "$24,500" },
  { marca: "Ford", modelo: "Mustang", potencia: "300 HP", precio: "$35,000" },
  { marca: "Chevrolet", modelo: "Camaro", potencia: "280 HP", precio: "$32,000" },
  
];


function mostrarInfoCoches(coches, propiedad) {
  coches.forEach(function(coche) {
      console.log(propiedad + ":", coche[propiedad]);
  });
}


let opcion = prompt("¿Qué desea mostrar? (marca, modelo, potencia, precio)");


mostrarInfoCoches(coches, opcion);
