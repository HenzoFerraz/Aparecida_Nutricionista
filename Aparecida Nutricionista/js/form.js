var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteFormulario(form);

	var erros = validaPaciente(paciente);
	
	if(erros.length > 0) {
		exibeMsgErro(erros);
		return;
	}
 	
 	adicionaPacienteNaTabela(paciente);
	
	form.reset();

	var mensagensErro = document.querySelector("#mensagem-erro");
	mensagensErro.innerHTML = "";

});

function obtemPacienteFormulario(form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value,form.altura.value)
	}
	
	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente")

	
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

	}

function montaTd(dado,classe) {
	var td = document.createElement("td");
	td.textContent = dado
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if(paciente.nome.length == 0) erros.push("Campo do nome é obrigatório");

	if(paciente.peso.length == 0) erros.push("Campo do peso é obrigatório");

	if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

	if(paciente.altura.length == 0) erros.push("Campo da altura é obrigatório");

	if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

	if(paciente.gordura.length == 0) erros.push("Campo da gordura é obrigatório");

	return erros;


}

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}

function exibeMsgErro(erros){
	var ul = document.querySelector("#mensagem-erro");
		ul.innerHTML = "";

		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;

			ul.appendChild(li);

		});
}

