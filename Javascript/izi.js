const btnInfo=document.getElementById('btn-info');
const btnExito=document.getElementById('btn-exito');
const btnWarning=document.getElementById('btn-warning');
const btnError=document.getElementById('btn-error');
const btnPregunta=document.getElementById('btn-pregunta');
const btnProgreso=document.getElementById('btn-progreso');
const btnCustom1=document.getElementById('btn-costum1');
const btnCustom2=document.getElementById('btn-custom2');

btnInfo.addEventListener('click',function(){
iziToast.info({
    title: 'Informacion',
    message: 'Este mensaje es meramente informativo.',
});

});

btnExito.addEventListener('click',function(){
iziToast.success({
    title: 'Exito',
    message: 'Su operacion fue realizada correctamente.',
});



});


btnWarning.addEventListener('click',function(){

iziToast.warning({
    title: 'Caution',
    message: 'You forgot important data',
});

});

btnError.addEventListener('click',function(){
iziToast.error({
    title: 'Error',
    message: 'Ocurrio un problema',
});

})

btnProgreso.addEventListener('click',function(){
iziToast.show({
title:'Desea continuar o cerrar?',
message:'Elegir una opcion',
position:'center',
timeout:false,
theme:'dark',
progressBar:false,
progressBarColor:'red',
progressBarEasing:'linear',
buttons: [
        ['<button>Continuar.</button>', function (instance, toast) {
            iziToast.success({
    title: 'Usted finalizo su compra',
    message: 'Gracias totales.',
    position:'center',
});

        }, true], // true to focus
        ['<button>Cerrar</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutUp',
                onClosing: function(instance, toast, closedBy){
                    console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
                }
            }, toast, 'buttonName');
        }]
    ],

});


 
})