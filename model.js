// MODELO: datos y lógica de datos
const HotelModel = {
  hoteles: [
    { nombre: 'Puerto Hotel Tuxtla', ciudad: 'Tuxtla Gutiérrez', precio: 950 },
    { nombre: 'Puerto Hotel Tapachula', ciudad: 'Tapachula', precio: 850 },
    { nombre: 'Puerto Hotel San Cristóbal', ciudad: 'San Cristóbal', precio: 1100 },
    { nombre: 'Puerto Hotel CDMX', ciudad: 'Ciudad de México', precio: 1200 }
  ],
  todos() {
    return this.hoteles;
  },
  buscarPorCiudad(texto) {
    const t = texto.trim().toLowerCase();
    return this.hoteles.filter(h => h.ciudad.toLowerCase().includes(t));
  }
};
