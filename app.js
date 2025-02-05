// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresSorteados = [];

alert ('Bienvenido, ¡comencemos a jugar!');

function agregarAmigo(){

	let nombreSorteo = document.getElementById('amigo').value;
	if(nombresSorteados.includes(nombreSorteo)){
		alert('Ese nombre ya se ingresó');
	}else if(nombreSorteo == ''){
		alert('Debes ingresar un valor');
	}
	else{
		nombresSorteados.push(nombreSorteo);
		nombreSorteo = '';
	}
	limpiarCaja();
	console.log(nombresSorteados);
	return;
}

function sortearAmigo(){
	if (nombresSorteados.length == 0) {
		alert('No se han ingresado nombres');

	}else{
		asignarTextoElemento('p',`El nombre sorteado es: ${nombresSorteados[generarNumeroSorteado()]}`);
	}
	return;
}

function limpiarCaja(){
	let amigo = document.querySelector('#amigo');
	amigo.value = '';
}

function generarNumeroSorteado(){
	let numeroGenerado = Math.floor(Math.random()*nombresSorteados.length);
	console.log(numeroGenerado);
	return numeroGenerado;
}

function asignarTextoElemento(elemento, texto){
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}