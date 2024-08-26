
let a = (prompt("Ingresa el primer dato "))
let operacion = prompt("Ingresa una operación: +, -, * o /")
let b = (prompt("Ingresa el segundo dato "))
let resultado
let hayUnNumero


if (a === "" || b === "") {
    hayUnNumero = false
}
else{
    hayUnNumero = true
}

a = parseInt(a, 10)
b = parseInt(b, 10)

if (operacion === "+" && hayUnNumero) {
    resultado = a + b
    alert(`El resultado de ${a} mas ${b} es igual a ${resultado}`)
}
else if(operacion === "-" && hayUnNumero){
    resultado = a - b
    alert(`El resultado de ${a} menos ${b} es igual a ${resultado}`)
}
else if(operacion === "*" && hayUnNumero){
    resultado = a * b
    alert(`El resultado de ${a} por ${b} es igual a ${resultado}`)
}
else if(operacion === "/" && hayUnNumero){
    if (b === 0) {
        alert("No se puede dividir por cero")
    }
    else{
        resultado = a / b
        alert(`El resultado de ${a} dividido ${b} es igual a ${resultado}`)
    }
}
else {
    alert("Dato inválido, por favor verifique")
}
console.log(resultado);






