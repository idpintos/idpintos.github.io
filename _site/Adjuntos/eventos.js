console.log ("Bienvenido a mi web");

document.getElementById('boton').onclick = function(any) {   
    console.log("capturamos el click");
    document.getElementById("demo").innerHTML = "Un mensaje ! =)";
}

document.addEventListener("click",function(){
    console.log("se ha hecho click en la página");
})