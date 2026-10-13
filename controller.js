// CONTROLADOR: conecta el modelo con la vista
const HotelController = {
  iniciar() {
    HotelView.render(HotelModel.todos());
    HotelView.onBuscar(texto => {
      HotelView.render(HotelModel.buscarPorCiudad(texto));
    });
  }
};

HotelController.iniciar();
