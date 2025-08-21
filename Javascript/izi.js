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