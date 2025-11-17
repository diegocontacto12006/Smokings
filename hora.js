(function() {
  function mostrarFechaHoraMadrid() {
    const contenedor = document.getElementById('fechaHoraMadrid');
    if (!contenedor) return;

    const opciones = {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };

    const ahora = new Date();
    const fechaHoraMadrid = ahora.toLocaleString('es-ES', opciones);

    contenedor.textContent = `Fecha y Hora: ${fechaHoraMadrid}`;
  }

  setInterval(mostrarFechaHoraMadrid, 1000);

  document.addEventListener('DOMContentLoaded', mostrarFechaHoraMadrid);
})();
