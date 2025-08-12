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

console.log('La cantidad de pares que hay entre 0 y 100 es: ' + contador);

let mensaje='Bienvenido al sitio web construido por mis alumnos.';

document.getElementById('parrafo').innerText=mensaje;

let fondo=' #ffdddd';

document.body.style.backgroundColor=fondo;

let colorFont=' #010000';

document.getElementById('parrafo').style.color= colorFont;

let nombre='Agustin';

document.getElementById('saludo').innerText='Hola '+ nombre + ", bienvenido a tu perfil";

*/
document.getElementById('parrafo').innerText='Este es un mensaje de bienvenida al curso de diseno web. El inicio del curso fue hace varios meses y no logro que me den bola.';

document.getElementById('parrafo').style.color='black';
document.getElementById('parrafo').style.backgroundColor='white';
document.getElementById('parrafo').style.fontWeight='bold';
document.getElementById('parrafo').style.fontSize='22px';

function precioFinal(){
let precio=document.getElementById('precioInput').value;
/*value: captura el valor que va en el input*/
precio=parseFloat(precio);
/*variable precio acepta decimales con parseFloat
le agrago if con dos condiciones que dentro del input sea un numero y ademas que sea mayor a 0. Porque estoy calculando precio final con iva de mi producto.


*/

if(!isNaN(precio) && precio>0){
let iva= precio * 0.1735;
let total= precio + iva;

document.getElementById('resultado').innerText='Su producto con iva es de: $'+total;}

else{
    document.getElementById('resultado').innerText='INGRESE UN NUMERO VALIDO.'

}}
/* USO DEL ADDEVENTLISTENER ES UN EVENTO QUE RESPONDE A UN LLAMADO DEL USUARIO ES UN CLICK.
CHEQUEAR BIEN LOS PUNTOS Y COMAS LOS PARENTISIS Y LAS LLAVES. 
CHEQUEAR CONDICIONAL IF.
PUNTO CONCATENA FUNCIONES EN JAVA.*/

function cambiarMedida(medida){
const caja=document.getElementById('caja');
if(medida==='chico'){
caja.style.width='50px';
caja.style.height='50px';
}
else if(medida='mediano'){
caja.style.width='250px';
caja.style.height='250px';

}
else if(medida='grande'){
caja.style.width='350px';
caja.style.height='350px'

}
}
document.getElementById('btnChico').addEventListener('click',function(){
  cambiarMedida('chico');
} );

document.getElementById('btnMediano').addEventListener('click', function(){

cambiarMedida('mediano');

});



function calcularTotal(){
let p1=parseInt(document.getElementById('producto1').value);
let p2=parseInt(document.getElementById('producto2').value);
let totalDiv=document.getElementById('total');
if(isNaN(p1)||isNaN(p2)){
totalDiv.innerText='Por favor, poner un numero entero';
totalDiv.style.color='red';
totalDiv.style.fontWeight='bold';
}else{
let total=p1+p2;
totalDiv.innerText='El total es $'+ total;
totalDiv.style.color='green';
totalDiv.style.fontWeight='bold';

}

}

document.getElementById('calcular').addEventListener('click',calcularTotal);


const cambiarFondo=document.getElementById('cambiarFondo');
const body=document.body;

body.classList.add('tema-claro');

cambiarFondo.addEventListener('click',function(){
if(body.classList.contains('tema-claro')){
body.classList.remove('tema-claro');
body.classList.add('tema-oscuro');
cambiarFondo.innerText='Modo Claro.'

}else{
body.classList.remove('tema-oscuro');
body.classList.add('tema-claro');
cambiarFondo.innerText='Modo Oscuro';

}








});