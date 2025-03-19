
const calcularAhorro = () => {
    let historialAhorro = [];

    while (true) {
        let sueldo = parseInt(prompt("¿Cuál es tu sueldo mensual?"));
        let porcentaje = parseInt(prompt("¿Qué porcentaje de tu sueldo estás dispuesto a ahorrar mensualmente? (Ingresa solo el número)"));
        let montoObjetivo = parseInt(prompt("¿Cuál es la meta de ahorro que deseas alcanzar?"));
        let numeroDeMeses = parseInt(prompt("¿En cuántos meses deseas lograrlo?"));

        if ([sueldo, porcentaje, montoObjetivo, numeroDeMeses].some(isNaN) || [sueldo, porcentaje, montoObjetivo, numeroDeMeses].some(num => num <= 0)) {
            alert("¡Por favor, ingresa valores numéricos válidos!");
            continue;
        }

        const porcentajeAhorro = (sueldo * porcentaje) / 100;
        const ahorroMensual = montoObjetivo / numeroDeMeses;

        let resultado = porcentajeAhorro < ahorroMensual
            ? `No puedes ahorrar suficiente. Necesitas ahorrar $${ahorroMensual.toFixed(2)}, pero solo puedes $${porcentajeAhorro.toFixed(2)}.`
            : `Puedes lograr tu meta. Debes ahorrar $${ahorroMensual.toFixed(2)} por ${numeroDeMeses} meses.`;

       
        historialAhorro.push({ sueldo, porcentaje, porcentajeAhorro, montoObjetivo, numeroDeMeses, ahorroMensual, resultado });

        alert(resultado);

        let opcion = prompt("Ingresa 1 para volver a intentarlo o 2 para salir.");
        if (opcion !== "1") break;
    }


    console.log("Historial de intentos:");
    historialAhorro.forEach((ahorro, index) => console.log(`Intento ${index + 1}: ${ahorro.resultado}`));

    
    if (historialAhorro.length > 0) {
        const promedioAhorro = historialAhorro.reduce((acc, a) => acc + a.ahorroMensual, 0) / historialAhorro.length;
        console.log(`Promedio de ahorro mensual en todos los intentos: $${promedioAhorro.toFixed(2)}`);
    }
};


calcularAhorro();