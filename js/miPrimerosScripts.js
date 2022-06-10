function ocultarMostrarImg() {
    //display = none, block
    var valorDisplay = document.getElementById('idImagen').style.display;
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
    } else {
        valorDisplay = 'none';
    }
    document.getElementById('idImagen').style.display = valorDisplay;



}

function encender() {
    var ValorSRC = document.getElementById('idFoco').src;

    document.getElementById('idFoco').src = '../imagenes/encendido.png'

}

function apagar() {
    var ValorSRC = document.getElementById('idFoco').src;
    document.getElementById('idFoco').src = '../imagenes/apagado.png'

}

function encenderApagar() {

    var valorDisplayApagado = document.getElementById('idFocoApagado').style.display;
    var valorDisplayEncendido = document.getElementById('idFocoEncendido').style.display;
    var textoBoton = document.getElementById('idBoton').innerHTML;

    if (valorDisplayApagado == 'block') {
        valorDisplayApagado = 'none';
        valorDisplayEncendido = 'block';
        textoBoton = 'Apagar';
    } else {
        valorDisplayApagado = 'block';
        valorDisplayEncendido = 'none';
        textoBoton = 'Encender';

    }

    document.getElementById('idFocoApagado').style.display = valorDisplayApagado;
    document.getElementById('idFocoEncendido').style.display = valorDisplayEncendido;
    document.getElementById('idBoton').innerHTML = textoBoton;

}
function cambiarTextos() {
    console.log("ingreso")
    const elementos = document.getElementsByClassName('nuevo');
    /*
     elementos[0].innerHTML = "1er Texto";
     elementos[1].innerHTML = "2do Texto";
     elementos[2].innerHTML = "3er Texto";
    */

     /*
    for (let valor in elementos) {
        elementos[valor].innerHTML = "A"; 

    }
    */

    for(valor of elementos ){
        valor.innerHTML = "A";
    }

}

function cambiarTextosElementos() {
    const elementos = document.getElementsByTagName('h1');
    elementos[0].innerHTML = "A-gacha";
    elementos[1].innerHTML = "B-esame";

}
/*
function mOver() {
    var elemento = document.getElementById('div1');
    elemento.innerHTML = "Nuevo Texto";
    elemento.style.backgroundColor = "red";
    elemento.style.borderColor = "blue";

}

function mOut() {
    var elemento = document.getElementById('div1');
    elemento.innerHTML = "Texto para nuevos eventos";
    elemento.style.backgroundColor = "yellow";
    elemento.style.borderColor = "blue";

}
*/
function mOver(elemen) {
    elemen.innerHTML = "Nuevo Texto";
    elemen.style.backgroundColor = "red";
    elemen.style.borderColor = "blue";

}

function mOut(elemen) {
    elemen.innerHTML = "Texto para nuevos eventos 2";
    elemen.style.backgroundColor = "yellow";
    elemen.style.borderColor = "blue";

}

function imprimirPersona(){
    
    //Declaraciones de arreglos
    const colores = ['red', 'yellow', 'blue'];

    //desestructuracion de arreglos
    const [c1,c2,c3] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);

    const [p1,p2,p3] = ['red', 'yellow', 'blue'];
    console.log(p1);
    console.log(p3);
    console.log(p2);

    //Declaraciones de objetos
    const persona={nombre:"Cristhian", apellido:"Cedeño",edad:21};
    console.log(persona);

    //desestructuracion de objetos
    const {nombre, apellido, edad} = persona;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);

    const{n, a, e} = {n:'Cristhian',a:'Cedeño', e:21};
    console.log(n);
    console.log(a);
    console.log(e);
    
    //Objetos compuestos
    const persona2={nombre:"Cristhian", apellido:"Cedeño",edad:21, direccion:{calle:"America",numero:"OE3-23"}};
    console.log(persona2)
}