
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let promRusa;
	let maxEdad;
	let mujerMayor;
	let flagMayor = 1;
	let contGral = 0;
	let contAmericana = 0;
	let flagAmericana = 1;
	let porcAmericana;
	let contAmerMay = 0;
	let contRusa = 0;
	let flagRusa = 1;
	let contChina = 0;
	let contDosis = 0;
	let porcDosis;
	let flagDosis = 1;
	let acumRusa = 0;
	let contMin = 99999999999999999999999999999;
	let minVac;
	
	do{

		nombre = prompt("Ingrese el nombre. (Entre 3 y 10 caracteres)").toLowerCase();
		while( nombre.length < 3 || nombre.length > 10){
			nombre = prompt("Error, por favor ingrese un nombre. (Entre 3 y 10 caracteres)").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese la edad. (12 años o mayor)"));
		while( edad < 12){
			edad = parseInt(prompt("Error, por favor ingrese una edad válida. (12 años o mayor)"));
		}

		vacuna = prompt("Ingrese origen de la vacuna. (rusa/americana/china)").toLowerCase();
		while( !(vacuna == "rusa" || vacuna == "americana" || vacuna == "china")){
			vacuna = prompt("Error, por favor ingrese una vacuna válida. (rusa/americana/china)").toLowerCase();
		}
		while(vacuna != "americana" && edad <= 17){
			vacuna = prompt("Error, por favor ingrese una vacuna válida. (americana para menores de 18)").toLowerCase();
		}
	

		dosis = prompt("Ingrese si es la primer o segunda dosis. (p/s)").toLowerCase();
		while( !(dosis == "p" || dosis == "s")){
			dosis = prompt("Error, por favor ingrese si es la primer o segunda dosis. (p/s)").toLowerCase();
		}

		sexo = prompt("Ingrese el sexo. (f/m)").toLowerCase();
		while(!(sexo == "f" || sexo == "m")){
			sexo = prompt("Error, ingrese un sexo válido. (f/m)").toLowerCase();
		}

		if(sexo == "f" && (flagMayor || edad > maxEdad)){
			maxEdad = edad;
			mujerMayor = nombre;
			flagMayor = 0;
		}

		if(dosis == "s"){
			contDosis++;
			flagDosis = 0;
		}


		if(vacuna == "rusa"){
			contRusa++;
			contGral++;
			acumRusa = acumRusa + edad;
			flagRusa = 0;
			if(contRusa < contMin){
				contMin = contRusa;
				minVac = "rusa";
			}
			}
		else if(vacuna == "americana"){
			contAmericana++;
			contGral++;
			if(edad >= 18){
				contAmerMay++;
			}
			flagAmericana = 0;
			if(contAmericana < contMin){
				contMin = contAmericana;
				minVac = "americana";
			}
		}
		else{
			contChina++;
			contGral++;
			if(contChina < contMin){
				contMin = contChina;
				minVac = "china";
			}

		}

		seguir = prompt("¿Desea continuar ingresando datos? (s/n)").toLowerCase();
		while(!(seguir == "s" || seguir == "n")){
			seguir = prompt("Error, ingrese una opcion válida. (s/n)").toLowerCase();
		}



	}while(seguir == "s");

	if(!flagRusa){
		promRusa = acumRusa / contRusa;
	}

	if(!flagAmericana){
		porcAmericana = (contAmerMay * 100) / contAmericana;
	}

	if(!flagDosis){
		porcDosis = (contDosis * 100) / contGral;

	}

	document.write("El promedio de edad de los que se vacunaron con la rusa es de " + promRusa + "<br>");
	document.write("La mujer vacunada de mayor edad se llama " + mujerMayor + " y tiene " + maxEdad + "<br>");
	document.write("El " + porcAmericana + "% de los que recibieron la vacuna americana son mayores de edad." + "<br>");
	document.write("Sobre el total de los vacunados, el " + porcDosis + "% esta vacunado con dos dosis" + "<br>");
	document.write("La vacuna menos inoculada fue la " + minVac + "<br>");


}
