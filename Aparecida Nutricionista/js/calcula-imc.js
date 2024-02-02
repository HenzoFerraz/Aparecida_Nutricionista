var titulo = document.querySelector("h1");

			titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");



for(i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];
	
	var tdpeso = paciente.querySelector(".info-peso");
	var peso = tdpeso.textContent
	var tdaltura = paciente.querySelector(".info-altura");
	var altura = tdaltura.textContent 
	var tdimc = paciente.querySelector(".info-imc");
	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);


	if(!pesoValido) {
		pesoValido = false;
		tdimc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaValida) {
		alturaValida = false;
		tdimc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(pesoValido && alturaValida) {

	  var imc = calculaImc(peso,altura);

	  tdimc.textContent = imc;
	}
}

function calculaImc(peso,altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	
	return imc.toFixed(2);
}

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}
function validaAltura(altura) {
	if(altura >= 0 && altura < 4.0) {
		return true;
	} else {
		return false;
	}
}