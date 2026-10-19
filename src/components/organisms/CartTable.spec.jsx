import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartTable from './CartTable'

const carrito = [
  { id: 1, nombre: 'Item 1', precio: 100, cantidad: 2 },
  { id: 2, nombre: 'Item 2', precio: 200, cantidad: 1 },
]

describe('Organism: CartTable', () => {
  it('7. muestra el total y llama a onRemove con el id del producto quitado', async () => {
    const onRemove = jasmine.createSpy('onRemove')
    render(<CartTable carrito={carrito} onRemove={onRemove} />)

    expect(screen.getByText('Total: 400 Platinum')).toBeTruthy()

    await userEvent.click(screen.getAllByRole('button', { name: 'Quitar' })[0])
    expect(onRemove).toHaveBeenCalledWith(1)
  })
})
