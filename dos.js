function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contGral = 0;
    let contPos = 0;
    let contNeg = 0;
    let contDelta = 0;
    let contArg = 0;
    let contAlfa = 0;
    let contBeta = 0;
    let contMax = 0;
    let maxEdad = 0;
    let flagExt = 1;
    let flagPos = 1;
    let flagNeg = 1;
    let porcPos;
    let porcNeg;
    let cepaMax;
    

    for( let i = 1; i <= 8; i++ ){
         nacionalidad = prompt("Ingrese la nacionalidad (argentina/extranjero)").toLowerCase();
         while(!(nacionalidad == "argentina" || nacionalidad == "extranjero")){
             nacionalidad = prompt("Error, ingrese una nacionalidad válida. (argentina/extranjero)").toLowerCase();
         }

         resultado = prompt("Ingrese el resultado del hisopado. (positivo/negativo)").toLowerCase();
         while(!(resultado == "positivo" || resultado == "negativo")){
             resultado = prompt("Error, ingrese un resultado válido. (positivo/negativo)").toLowerCase();
         }

         edad = parseInt(prompt("Ingrese la edad. (entre 18 y 65 años)"));
         while(edad < 18 || edad > 65){
             edad = parseInt(prompt("Error, por favor ingrese una edad válida (entre 18 y 65 años)"));
         }

         cepa = prompt("Ingrese la cepa. (delta/alfa/beta/ninguna)").toLowerCase();
         while(!(cepa == "delta" || cepa == "alfa" || cepa == "beta" || cepa == "ninguna")){
             cepa = prompt("Error, ingrese una cepa válida. (delta/alfa/beta/ninguna)").toLowerCase();
         }
         while(resultado == "positivo" && cepa == "ninguna"){
             cepa = prompt("Error, si el resultado es positivo debe ingresar una cepa. (delta/alfa/beta)").toLowerCase();
         }

         if(resultado == "positivo"){
             contPos++;
             contGral++;
             flagPos = 0;
             if(cepa == "delta"){
                 contDelta++;
                 if(contDelta > contMax){
                     contMax = contDelta;
                     cepaMax = "delta";
                 }
                 if(nacionalidad == "argentina"){
                     contArg++;
                 }
             }
             else if( cepa == "alfa"){
                 contAlfa++;
                 if(contAlfa > contMax){
                     contMax = contAlfa;
                     cepaMax = "alfa";
                 }
             }
             else{
                 contBeta++;
                 if(contBeta > contMax){
                     contMax = contBeta;
                     cepaMax = "beta";
                 }
             }

             if(nacionalidad == "extranjero"){
                 if(flagExt || edad > maxEdad){
                     flagExt = 0
                     maxEdad = edad;
                 }
             }
         }
         else{
             contNeg++;
             contGral++;
             flagNeg = 0;
         }
    }
    if(!flagPos){
        porcPos = (contPos * 100) / contGral;
    }

    if(!flagNeg){
        porcNeg = (contNeg * 100) / contGral;
    }

    document.write("El porcentaje de positivos entre los hispoados es de %" + porcPos + "<br>");
    document.write("El porcentaje de negativos entre los hisopados es de %" + porcNeg + "<br>");
    document.write("La cepa más encontra es la " + cepaMax + "<br>");
    document.write("El extranjero contagiado de mayor edad, tiene " + maxEdad + " años." + "<br>");
    document.write("La cantidad de argentinos contagiados con la cepa delta es de " + contArg + "<br>");
}
