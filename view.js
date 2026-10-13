// VISTA: lo que el usuario ve
const HotelView = {
  render(hoteles) {
    const contenedor = document.getElementById('lista-hoteles');
    if (hoteles.length === 0) {
      contenedor.innerHTML = '<p class="text-muted">No se encontraron hoteles en esa ciudad.</p>';
      return;
    }
    contenedor.innerHTML = hoteles.map(h => `
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5>${h.nombre}</h5>
            <p>${h.ciudad} · $${h.precio} MXN/noche</p>
            <a href="#" class="btn btn-outline-primary">Reservar</a>
          </div>
        </div>
      </div>`).join('');
  },
  onBuscar(manejador) {
    document.getElementById('btn-buscar').addEventListener('click', () => {
      manejador(document.getElementById('ciudad').value);
    });
  }
};
