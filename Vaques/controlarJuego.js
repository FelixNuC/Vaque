const vidaj1 =  document.getElementById("saludjugador1");
const vidaj2 = document.getElementById("saludjugador2"); 

var iconosaludj1 = document.getElementById("barraVidaJ1");
var iconosaludj2 = document.getElementById("barraVidaJ2");

var imgpersonajeJ1 = document.getElementById("personaje1");
var imgpersonajeJ2 = document.getElementById("personaje2");

var iconoaccionj1 = document.getElementById("accionj1");
var iconoaccionj2 = document.getElementById("accionj2");

var divpuntuacion =  document.getElementById("puntuacion");

var balasj1 = document.getElementById("cargadorj1");
var balasj2 = document.getElementById("cargadorj2");

var temporizador = 3;
var espaciodado = false;
var turnoJ1jugado = false;
var turnoJ2jugado = false;

var cargadorJ1 = 1;
var cargadorJ2 = 1;

var saludJ1 = 100;
var saludJ2 = 100;

var sludMax = 100;

var puntuacionj1 = 0;
var puntuacionj2 = 0;

var suerte;
function livecounter(){
    document.getElementById("livec").innerHTML=temporizador + 1 ;
}

function espacio(){
    document.addEventListener('keyup', (e) => {
        switch (e.key) {
            //recargar

        
            case " " : 
            if (espaciodado==false) {
                    teclapulsada();
                    interval = setInterval(function() {
                        temporizador--;
                        console.log(temporizador);
                        livecounter();
                        if (temporizador === 0) {
                            clearInterval(interval);
                            temporizador = 3;
                            turnoJ1jugado = false;
                            turnoJ2jugado = false;
                            teclapulsada();
                        }
                        espaciodado = true;
                    },1000);
             
                }
            break;
                }    
        })

}
espacio();

function teclapulsada(){
    document.addEventListener('keyup', (e) => {
        switch (e.key) {
            //recargar
            case "s" : 
                if (turnoJ1jugado == false) {
                    recargarJ1();
                    turnoJ1jugado = true;
                    espaciodado = false;
                }
            break;
            case "ArrowDown" : 
                if (turnoJ2jugado == false) {
                    recargarJ2();
                    turnoJ2jugado = true;
                    espaciodado = false;
                }
            break;
            //disparar
            case "d": 
            if (turnoJ1jugado==false){
                    dispararJ1();  
                    turnoJ1jugado = true;
                    espaciodado = false;
                }
            break;   
            case "ArrowLeft" : 
                if (turnoJ2jugado==false){ 
                    dispararJ2();
                    turnoJ2jugado = true;
                    espaciodado = false;
                }
            break;
            //esquivar
            case "a":
                if (turnoJ1jugado ==false){
                    dodgeJ1();
                    turnoJ1jugado = true;
                    if (turnoJ2jugado==true) { //ESTO PARA EL SIGUIENTE DIA 
                        espaciodado = false;
                    }
                } 
            break;

            case "ArrowRight" :  
                if (turnoJ2jugado == false){
                    dodgeJ2();
                    turnoJ2jugado = true;
                    espaciodado = false;
                }
            break;
        }
    });
}
function updatej1livebar() {
    if (saludJ1==100) {
        iconosaludj1.setAttribute("src","visuales/fullBarraVidaJ1.png");
    }else if (saludJ1 == 75) {
        iconosaludj1.setAttribute("src","visuales/barraVida-1.png");
    }else if (saludJ1 == 50) {
        iconosaludj1.setAttribute("src","visuales/barraVida-2.png");
    }else if (saludJ1 == 25) {
        iconosaludj1.setAttribute("src","visuales/barraVida-3.png");
    }else if (saludJ1 == 0) {
        alert ("has muerto");
        puntuacionj2 ++;
        divpuntuacion.innerHTML ="Puntuacio j1: " + puntuacionj1 + "Puntuacio j2: " + puntuacionj2;
    }
  }
function updatej2livebar() {
    if (saludJ2==100) {
        iconosaludj2.setAttribute("src","visuales/fullBarraVidaJ2.png");
    }else if (saludJ2 == 75) {
        iconosaludj2.setAttribute("src","visuales/barraVida-1J2.png");
    }else if (saludJ2 == 50) {
        iconosaludj2.setAttribute("src","visuales/barraVida-2j2.png");
    }else if (saludJ2 == 25) {
        iconosaludj2.setAttribute("src","visuales/barraVida-3j2.png");
    }else if (saludJ2 == 0) {
        alert ("has muerto");
        puntuacionj1 ++;
        divpuntuacion.innerHTML ="Puntuacio j1: " + puntuacionj1 + "Puntuacio j2: " + puntuacionj2;

    }
}
  

//Recargar
function recargarJ1() {
    console.log('jugador1');
    cargadorJ1 ++;
    iconoaccionj1.setAttribute('src',"recarga2.png");
    iconoaccionj1.setAttribute('style',"width:10vw;");
    setTimeout(function()  {
        iconoaccionj1.setAttribute('src',"");
    },400)
    console.log('cargador J1'+cargadorJ1);
    balasj1.innerHTML = cargadorJ1;
}
function recargarJ2() {
    console.log('jugador2');
    cargadorJ2 ++;
    iconoaccionj2.setAttribute('src',"recarga2.png");
    iconoaccionj2.setAttribute('style',"width:10vw;");
    setTimeout(function()  {
        iconoaccionj2.setAttribute('src',"");
    },500);
    console.log('cargador J2'+cargadorJ2);
    balasj2.innerHTML = cargadorJ2;

}
//Disparar
function dispararJ1() {
    if (cargadorJ1 <= 0) {
        console.log('alert');
    }
    else{
        saludJ2 -= 25;
        cargadorJ1 --;
        iconoaccionj1.setAttribute('src',"disparo.png");
        setTimeout(function()  {
            iconoaccionj1.setAttribute('src',"");
        },500)
        balasj1.innerHTML = cargadorJ1;
        updatej2livebar() ;
        textupdater();
    }
    console.log('cargador J1'+cargadorJ1);
}
function dispararJ2() {
    if (cargadorJ2 <= 0) {
        console.log('alert');
    }
    else{
        cargadorJ2 --;
        saludJ1 -= 25;
        iconoaccionj2.setAttribute('src',"disparo.png");
        setTimeout(function()  {
            iconoaccionj2.setAttribute('src',"");
        },400);
        balasj2.innerHTML = cargadorJ2;
        updatej1livebar();
        textupdater();
    }
    console.log('cargador J2'+cargadorJ2);
}
//Esquivar
function dodgeJ1() {
    suerte =  Math.floor(Math.random() * 2) ;
    if (suerte == 1) {
        console.log('j1 esquivo el tiro'); 
        saludJ1 += 50;

        imgpersonajeJ1.setAttribute('src',"vaqueroesquivando1.png");
        setTimeout(function()  {
            imgpersonajeJ1.setAttribute('src',"standarpose1.png");
        },400)
        
        updatej1livebar();
        textupdater();
    }
    console.log('jugador1 ha intentado esquivar');
}
function dodgeJ2() {
    suerte =  Math.floor(Math.random() * 2) ;
    if (suerte == 1) {
        console.log('j2 esquivo el tiro'); 
        saludJ2 += 50;
        imgpersonajeJ2.setAttribute('src',"vaqueroesquivando2.png");
        setTimeout(function()  {
            imgpersonajeJ2.setAttribute('src',"standarpose2.png");
        },400)
        
        updatej2livebar();
        textupdater();
    }
    console.log('jugador2 ha intentado esquivar');
}

function textupdater(){
    if (saludJ1 <= 0) {
        texto.innerHTML = "Jugador 2 ha ganado ";
    }
    if (saludJ2 <= 0) {
        texto.innerHTML = "Jugador 1 ha ganado ";   
    }
}

function resetear(){
    cargadorJ1 = 1;
    cargadorJ2 = 1;
    balasj1.innerHTML = cargadorJ1;
    balasj2.innerHTML = cargadorJ2;
    saludJ1 = 100;
    saludJ2 = 100;
    iconosaludj1.setAttribute("src","visuales/fullBarraVidaJ1.png");
    iconosaludj2.setAttribute("src","visuales/fullBarraVidaj2.png");
    clearInterval(interval);
}

