
let nota = parseInt(prompt("Ingresa una nota entre 0 y 100 "))

if (nota <= 20){
    console.log("la calificacion es F");
    
}
else if(nota <= 40){
    console.log("La calificación es D");
    
}
else if(nota <= 60){
    console.log("La calificación es C");
    
}
else if(nota <= 80){
    console.log("La calificación es B");
    
}
else if(nota <= 100){
    console.log("La calificación es A");
    
}
else{
    console.log("Dato ingresado no es válido");
    
}