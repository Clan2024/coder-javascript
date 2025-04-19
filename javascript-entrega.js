const formulario = document.getElementById("formularioAhorro");
const resultadoDiv = document.getElementById("resultado");
const historialUl = document.getElementById("historial");
const cargarMetasBtn = document.getElementById("cargarMetas");
const listaMetas = document.getElementById("listaMetas");

let historialAhorro = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const porcentaje = parseFloat(document.getElementById("porcentaje").value);
  const montoObjetivo = parseFloat(document.getElementById("meta").value);
  const numeroDeMeses = parseInt(document.getElementById("meses").value);

  if ([sueldo, porcentaje, montoObjetivo, numeroDeMeses].some(isNaN) ||
      [sueldo, porcentaje, montoObjetivo, numeroDeMeses].some(val => val <= 0)) {
    mostrarResultado("Por favor, completa todos los campos con valores válidos.", false);
    return;
  }

  const porcentajeAhorro = (sueldo * porcentaje) / 100;
  const ahorroMensual = montoObjetivo / numeroDeMeses;

  const puedeAhorrar = porcentajeAhorro >= ahorroMensual;

  const resultadoTexto = puedeAhorrar
    ? `¡Bien hecho! Puedes alcanzar tu meta. Necesitas ahorrar $${ahorroMensual} al mes por ${numeroDeMeses} meses.`
    : `Ups... No es posible con tu porcentaje de ahorro actual. Necesitas $${ahorroMensual} al mes pero puedes ahorrar $${porcentajeAhorro} mensualmente, ¡lo importante es empezar!`;

  mostrarResultado(resultadoTexto, puedeAhorrar);

  historialAhorro.push({
    sueldo,
    porcentaje,
    montoObjetivo,
    numeroDeMeses,
    porcentajeAhorro,
    ahorroMensual,
    resultadoTexto
  });

  actualizarHistorial();
});

function mostrarResultado(mensaje, exito) {
  resultadoDiv.textContent = mensaje;
  resultadoDiv.classList.remove("oculto", "exito", "error");
  resultadoDiv.classList.add(exito ? "exito" : "error");
}

function actualizarHistorial() {
  historialUl.innerHTML = "";
  historialAhorro.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `Intento ${index + 1}: ${item.resultadoTexto}`;
    historialUl.appendChild(li);
  });
}

cargarMetasBtn.addEventListener("click", () => {
  fetch("metas.json")
    .then((response) => response.json())
    .then((data) => {
      listaMetas.innerHTML = "";
      data.forEach((meta, index) => {
        const li = document.createElement("li");
        li.textContent = `Meta ${index + 1}: Ahorrar $${meta.monto} en ${meta.meses} meses.`;
        listaMetas.appendChild(li);
      });
    })
    .catch((error) => {
      listaMetas.innerHTML = "<li>Error al cargar las metas sugeridas.</li>";
      console.error("Error al leer metas.json:", error);
    });
});
