
let numero = 5
let mensaje

switch (numero) {
    case 1:
        mensaje = "Es lunes"
        break;
    case 2:
        mensaje = "Es martes"
        break;
    case 3:
        mensaje = "Es miercoles"
        break;
    case 4:
        mensaje = "Es jueves"
        break;
    case 5:
        mensaje = "Es viernes"
        break;
    case 6:
        mensaje = "Es sabado"
        break;
    case 7:
        mensaje = "Es domingo"
        break;

    default:
        mensaje = "Dato inválido"
        break;
}
console.log(mensaje);
