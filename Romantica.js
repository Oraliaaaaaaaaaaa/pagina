var boton = document.querySelector(".contenedor")

let recteas={
    preceta : "",
    sreceta : "",
    treceta : "",
    creceta : "",
    qreceta : "",
    sxreceta : "",
    spreceta : "",
    ocreceta : "",
    novreceta : "",
}

function showReceta(number) {
     boton.style.display="block";
     if (number==1) {
        document.querySelector(".contenedor").innerHTML="https://www.factorgastronomic.com/es/ingrediente-principal/recetas-de-verduras/receta-ensalada-payesa-de-formentera/";
        
     }if (number==2) {
        document.querySelector(".contenedor").innerHTML=recteas.sreceta
        
     }if (number==3) {
        document.querySelector(".contenedor").innerHTML=recteas.treceta
        
     }if (number==4) {
        document.querySelector(".contenedor").innerHTML=recteas.creceta
        
     }if (number==5) {
        document.querySelector(".contenedor").innerHTML=recteas.qreceta
        
     }if (number==6) {
        document.querySelector(".contenedor").innerHTML=recteas.sxreceta
        
     }if (number==7) {
        document.querySelector(".contenedor").innerHTML=recteas.spreceta
        
     }if (number==8) {
        document.querySelector(".contenedor").innerHTML=recteas.ocreceta
        
     }if (number==9) {
        document.querySelector(".contenedor").innerHTML=recteas.novreceta
        
     }
}

function cerrar() {
    
    document.querySelector(".contenedor").style.display="none"
}

