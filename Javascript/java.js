/*let edad= 47;
let nombre= 'agustin';
console.log(edad);
console.log(nombre);

alert('Bienvenido al curso de Diseno Web');
prompt('como se llama usted');*/
/*
let nombre='Lucas';
 console.log('Hola '+ nombre +'. Como estas? ');

 let usuario=prompt('Como te llamas');

 alert('Hola'+' '+ usuario +' Bienvenido a mi pagina.');
 
 let color1= prompt('Elija un color');
 let color2=prompt('Elija otro color');

 console.log('Si mezclas '+ color1+' y '+color2+' No respetas la formula 60 30 10');*/
/* uso dos prompt para sumar sus valores y que se vean en el console.log y el parseInt para asegurarme que ingrese numeros enteros
 let number1= parseInt(prompt('Ingrese el primer numero'));
 let number2= parseInt(prompt('Ingrese el segundo numero'));

 alert('La suma de los numeros ingresados: '+(number1*number2));

if ciclo que depende de un condicional y la sintaxis es:
if(condicional){
codigo.
}
si es true se imprime y si es false no se imprime el ciclo.

let age=Number(prompt('que edad tenes'));

if(age>=18){
alert('Acceso Permitido.');  
}
else{
alert('Usted vayase a otra pagina.');

}

genero 2 variables con prompt una valido el usario y la otra password

let user=prompt('Ingrese su usuario');
let password= prompt('Ingreso su password');

if(user!=="" && password!==''){

console.log('Usted a ingresado a su perfil.')

}
else{
    alert('Complete sus datos.');
}

let saber= prompt('Usted sabe de Javascript?Si/No');

if(saber==='Si'){
console.log('Usted puede ingresar al curso');
}
else if(saber==='No'){

 console.log('Hago un curso de ingreso');
}
else{alert('Ingresa la palabra correcta.')};

Comienzo del ciclo for
let numero= prompt('Que tabla de multiplicar queres ver');

for(let i=0; i<=10;i++){

console.log(numero+'x'+i+'='+(numero*i));

}


let contador=0;

for(let i=0;i<=100;i++){

if(i % 2 ===0)
{  contador++;}

}

console.log('La cantidad de pares que hay entre 0 y 100 es: ' + contador);*/

let mensaje='Bienvenido al sitio web construido por mis alumnos.';

document.getElementById('parrafo').innerText=mensaje;

let fondo=' #ffdddd';

document.body.style.backgroundColor=fondo;

let colorFont=' #010000';

document.getElementById('parrafo').style.color= colorFont;

let nombre='Agustin';

document.getElementById('saludo').innerText='Hola '+ nombre + ", bienvenido a tu perfil";

