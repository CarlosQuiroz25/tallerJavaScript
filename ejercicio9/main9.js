
let numero = parseInt(prompt("Ingresa un numero del 1 al 4 "))
let mensaje
switch (numero){
    case 1:
    mensaje = "Opción 1 seleccionada"
    break
    case 2:
    mensaje = "Opción 2 seleccionada"
    break
    case 3:
    mensaje = "Opción 3 seleccionada"
    break
    case 4:
    mensaje = "Opción 4 seleccionada"
    break
    default:
    mensaje = "Opción no válida"
    break
}
console.log(mensaje);
alert(mensaje)
