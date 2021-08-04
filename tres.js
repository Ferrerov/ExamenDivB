function mostrar()
{
	let origen;
	let cant;
	let costo;
	let mayVac;
	let origMay = 0;
	let cantMay = 0;
	let prom;
	let importeBruto = 0;
	let descuento;
	let acumCant;
	let importeFinal = 0;
	let flagAsia = 1;
	let flagEuropa = 1;
	let flagUsa = 1;
	let contAsia = 0;
	let contEuropa = 0;
	let contUsa = 0;
	let acumAsia = 0;
	let acumEuropa = 0;
	let acumUsa = 0;
	let flagDesc = 1;
	let descPorc;

	for( let i = 1; i <= 10; i++ ){
		origen = prompt("Ingrese el origen del vuelo. (asia/europa/usa)").toLowerCase();
		while(!(origen == "asia" || origen == "europa" || origen == "usa")){
			origen = prompt("Error, ingrese un origen válido. (asia/europa/usa)").toLowerCase();
		}

		cant = parseInt(prompt("Ingrese la cantidad de vacunas. "));
		while( cant <= 0 ){
			cant = parseInt(prompt("Error, por favor ingrese una cantidad mayor a 0"));
		}

		costo = parseInt(prompt("Ingrese el costo del vuelo. (mínimo 1 millon, maximo 5 millones)"));
		while(costo < 1000000 || costo > 5000000){
			costo = parseInt(prompt("Error, ingresar un costo válido. (mínimo 1 millon, maximo 5 millones)"));
		}

		if(origen == "asia"){
			contAsia++;
			flagAsia = 0;
			acumAsia = acumAsia + cant;
			if(acumAsia > cantMay){
				cantMay = acumAsia;
				origMay = "asia";
			}
			importeBruto = importeBruto + costo;
			acumCant = acumCant + cant;

		}
		else if(origen == "europa"){
			contEuropa++;
			flagEuropa = 0;
			acumEuropa = acumEuropa + cant;
			if(acumEuropa > cantMay){
				cantMay = acumEuropa;
				origMay = "europa";
			}
			importeBruto = importeBruto + costo;
			acumCant = acumCant + cant;
		}
		else{
			contUsa++;
			flagUsa = 0;
			acumUsa = acumUsa + cant;
			if(acumUsa > cantMay){
				cantMay = acumUsa;
				origMay = "usa";
			}
			importeBruto = importeBruto + costo;
			acumCant = acumCant + cant;
		}
		
		
		
	}

	if(acumCant > 4000000){
		descuento = 0.7;
		flagDesc = 0;
		descPorc = 30;
	}
	else if(acumCant <= 4000000 && acumCant >= 2000000){
		descuento = 0.8;
		flagDesc = 0;
		descPorc = 20;
	}
	else{
		descuento = 1;
		descPorc = 0;
	}

	importeFinal = importeBruto * descuento;
	prom = acumAsia / contAsia;

	document.write("El origen que envio mayor cantidad de vacunas es " + origMay + "<br>");
	document.write("El promedio de vacunas llegadas de Asia es de " + prom + "<br>");
	document.write("El importe a pagar sin descuentos es de $" + importeBruto + "<br>");
	document.write("Por la cantidad de vacunas compradas, hubo un descuento del %" + descPorc + " y el importe final a pagar resulta en $" + importeFinal + "<br>");

}
