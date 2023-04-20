var num1, num2, respuesta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");
nuevo_elemento=17;
function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 1 100
	num1 = Math.round(Math.random()*100);
	num2 = Math.round(Math.random()*100);

	operacion = Math.round(Math.random()*5);
	if (operacion == 1){
		respuesta = num1 + num2;
		//asignamos lo números para que se muestren
		suma.innerHTML = num1 + " + " + num2 + " = ";
	}
		
	else if (operacion == 2){
		respuesta = num1 - num2;
		//asignamos lo números para que se muestren
		suma.innerHTML = num1 + " - " + num2 + " = ";
	}
	
	else if (operacion == 3){
		respuesta = num1 * num2;
		//asignamos lo números para que se muestren
		suma.innerHTML = num1 + " * " + num2 + " = ";
	}

	else if (operacion == 4){
		respuesta = Math.round(num1 / num2);
		//asignamos lo números para que se muestren
		suma.innerHTML = num1 + " / " + num2 + " = ";
	}

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
	
}

function controlarRespuesta(opcionElegida){	
	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color="green";
		setTimeout(comenzar, 1000);
		nuevo_elemento=15;
	}
	else{
		txt_msj.innerHTML = "INTENTA DE NUEVO!!";
		txt_msj.style.color="red";
		setTimeout(limpiar, 1000);

	}
}

function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

setInterval(function(){
	document.getElementById("Timer").innerHTML="Contador: "+nuevo_elemento;
	if (nuevo_elemento === 16){
		comenzar();
		nuevo_elemento=15;
	}
	else if (nuevo_elemento === 0){
		comenzar();
		nuevo_elemento=15;
	}
	nuevo_elemento = nuevo_elemento-1;
},1000);

