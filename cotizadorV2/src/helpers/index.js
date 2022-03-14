export function obtenerDiferenciaYear( year ) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca){

    // Europeo 30 %
    // Americano 15%
    // Asiatico 5%

    let incremento = 0;

    switch (marca) {
        case "1":
            incremento = 1.3
            break;
        case "2":
            incremento = 1.15
            break;
        case "3":
            incremento = 1.05
        default:
            break;
    }

    return incremento;
}

export function calcularPlan(plan){
    // Plan básico 20%
    // Plan completo 50%
    return plan === "1" ? 1.2 : 1.5
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('es-HN', {
        style: 'currency',
        currency: 'HND'
    })
}