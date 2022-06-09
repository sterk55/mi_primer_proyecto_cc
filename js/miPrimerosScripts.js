function ocultarMostrarImg(){
    //display = none, block
    var valorDisplay = document.getElementById('idImagen').style.display;
    if(valorDisplay == 'none'){
        valorDisplay = 'block';
    }else{
        valorDisplay = 'none';
    }
    document.getElementById('idImagen').style.display = valorDisplay;



}

function encender(){
var ValorSRC = document.getElementById('idFoco').src;

document.getElementById('idFoco').src='../imagenes/encendido.png'

}

function apagar(){
var ValorSRC = document.getElementById('idFoco').src;
document.getElementById('idFoco').src='../imagenes/apagado.png'

}