export function agregarAlCarrito(carrito, producto) {
  const existe = carrito.find((item) => item.id === producto.id)
  if (existe) {
    return carrito.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    )
  }
  return [...carrito, { ...producto, cantidad: 1 }]
}

export function quitarDelCarrito(carrito, id) {
  return carrito.filter((item) => item.id !== id)
}

export function calcularTotal(carrito) {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
}

export function contarItems(carrito) {
  return carrito.reduce((total, item) => total + item.cantidad, 0)
}

export function filtrarProductos(productos, texto) {
  const busqueda = texto.trim().toLowerCase()
  if (busqueda === '') return productos
  return productos.filter((p) => p.nombre.toLowerCase().includes(busqueda))
}
