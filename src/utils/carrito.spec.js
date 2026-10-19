import { agregarAlCarrito, calcularTotal } from './carrito'
import { productosDemo } from '../test/fixtures'

describe('Lógica: utils/carrito', () => {
  it('10. suma cantidades de un mismo producto sin mutar el original y calcula el total', () => {
    const inicial = agregarAlCarrito([], productosDemo[0])
    const conDos = agregarAlCarrito(inicial, productosDemo[0])
    const conOtro = agregarAlCarrito(conDos, productosDemo[1])

    expect(inicial[0].cantidad).toBe(1)   
    expect(conDos[0].cantidad).toBe(2)
    expect(calcularTotal(conOtro)).toBe(400) 
  })
})
