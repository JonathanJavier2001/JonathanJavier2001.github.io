var usuario = "Jonathan";
var clave = "12345";

function verificarDatos(){
    var usuarioIngresado = document.getElementById('idUsuario').value;
    var claveIngresada = document.getElementById('idClave').value;
    if(usuarioIngresado == usuario && claveIngresada == clave){
        location.href = "PáginaPrincipal.html";
    }else{
        alert("Hay datos incorrectos");
    }
}

function regresarInicio(){
    location.href = "PáginaPrincipal.html";
}

function slider1(){
    document.getElementById("asignatura1").style.opacity = "1";
    document.getElementById("asignatura2").style.opacity = "0";
    document.getElementById("asignatura3").style.opacity = "0";
    document.getElementById("asignatura4").style.opacity = "0";
    document.getElementById("asignatura5").style.opacity = "0";
}

function slider2(){
    document.getElementById("asignatura1").style.opacity = "0";
    document.getElementById("asignatura2").style.opacity = "1";
    document.getElementById("asignatura3").style.opacity = "0";
    document.getElementById("asignatura4").style.opacity = "0";
    document.getElementById("asignatura5").style.opacity = "0";
}

function slider3(){
    document.getElementById("asignatura1").style.opacity = "0";
    document.getElementById("asignatura2").style.opacity = "0";
    document.getElementById("asignatura3").style.opacity = "1";
    document.getElementById("asignatura4").style.opacity = "0";
    document.getElementById("asignatura5").style.opacity = "0";
}

function slider4(){
    document.getElementById("asignatura1").style.opacity = "0";
    document.getElementById("asignatura2").style.opacity = "0";
    document.getElementById("asignatura3").style.opacity = "0";
    document.getElementById("asignatura4").style.opacity = "1";
    document.getElementById("asignatura5").style.opacity = "0";
}

function slider5(){
    document.getElementById("asignatura1").style.opacity = "0";
    document.getElementById("asignatura2").style.opacity = "0";
    document.getElementById("asignatura3").style.opacity = "0";
    document.getElementById("asignatura4").style.opacity = "0";
    document.getElementById("asignatura5").style.opacity = "1";
}