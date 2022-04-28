//Funciones clasicas
var a=5
var b=10

var funcion1=function factor(a,b) {
   
if (a%b==0) {
    console.log(b+"  es factor de "+ a);
} else {
    console.log(b+" No es factor de "+a)
} if (b%a==0) {
    console.log(a+" Es factor de "+b)
    
}else{ console.log(a+" No es factor de "+b)}
}
console.log(funcion1(a,b))

//funciones flecha sin parametro
var  saludar= ()=> "hola";
console.log (saludar())

// Funcion flecha con parametro

var exponente = num=> num**2;
console.log (exponente(5))


//funcion flecha con cuerpo

var factores = (nu1,nu2)=> {
 if(nu1%nu2=0||nu2%nu1=0)) {
     console.log("unos de los numeros es factor del otro") 
 } else {
    console.log(b+" No es factor de "+a)
 }
}

/*divisores
porcentaje
fecha*/

//porcenaje
var porcentaje= 25;
var va= 100;
var C_porcentaje= (p,v)=>{
 resultado= v *p/100 ;
 console.log("el procentaje de "+v+ " es: "+ resultado);
}
C_porcentaje(porcentaje,va);


var dia= 55
if (dia<=365) {
    if (dia<=31) {
        console.log(dia+" /01/2022")
    } else {
        if (dia<=59 ) {
            console.log(dia+" /02/2022")
        } else {
            if ( dia<=90  ) {
                console.log(dia+" /03/2022")
            } else {
                if (dia<=120  ) {
                    console.log(dia+" /04/2022")
                } else {
                    if (dia<=151  ) {
                        console.log(dia+" /05/2022")
                    } else {
                        if ( dia<=181  ) {
                            console.log(dia+" /06/2022")
                        } else {
                            if (dia<=212 ) {
                                console.log(dia+" /07/2022")
                            } else {
                                if (dia<=243 ) {
                                    console.log(dia+" /08/2022")
                                } else {
                                    if (dia<=273 ) {
                                        console.log(dia+" /09/2022")
                                    } else {
                                        if (dia<=304 ) {
                                            console.log(dia+" /10/2022")
                                        } else {
                                            if ( dia<=334  ) {
                                                console.log(dia+" /11/2022")
                                            } else {
                                                if (dia<=365 ) {
                                                    console.log(dia+" /12/2022")
                                                }
                                            }
                                            
                                        }
                                    }
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }
} else {
    console.log("no hay mas de 365 dias en el año")
}




/*
enero <=31
feb <=59
marzo
Abril  <=120
Mayo   <= 151
junio   <= 181

julio  <= 212
agosto  <= 243

septiembre  <= 273
octubre  <= 304
noviebre  <= 334
diciembre <= 365


/*
function fecha(dia) {
    if (dia<=365) {
        if (dia<=31) {
            console.log(dia+" /01/2022")
        } else{
            if(dia<=59) {
            console.log(dia+" /02/2022")
        } } if(dia<=90) {
            console.log(dia+" /03/2022")
        }if(dia<=120) {
            console.log(dia+" /04/2022")
        }if(dia<=151) {
            console.log(dia+" /05/2022")
        }if(dia<=181) {
            console.log(dia+" /06/2022")
        }if(dia<=212) {
            console.log(dia+" /07/2022")
        }if(dia<=243) {
            console.log(dia+" /08/2022")
        }if(dia<=273) {
            console.log(dia+" /09/2022")
        }if(dia<=304) {
            console.log(dia+" /10/2022")
        }if(dia<=334) {
            console.log(dia+" /11/2022")
        }if(dia<=365) {
            console.log(dia+" /12/2022")
        }
    } else {
        console.log("no hay mas de 365 dias en el año")
    }
}


fecha(55)*/

var ob={
    nombre: 'David',
    documento: 1001176527,
    ficha:2237749,
    telefono:3194582895,
     datos: function() { return "soy"+this.nombre+
     "identificado con el numero de odcumento: "+ this.documento+
     "de la ficha "+this.ficha+
     "con el telefono "
     +this.telefono}
}

console.log (ob.nombre)
