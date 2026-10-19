import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from './ProductCard'
import { productosDemo } from '../../test/fixtures'

describe('Organism: ProductCard', () => {
  it('5. muestra los datos recibidos por props y llama a onAdd con el producto', async () => {
    const onAdd = jasmine.createSpy('onAdd')
    render(<ProductCard producto={productosDemo[0]} onAdd={onAdd} />)

    expect(screen.getByRole('heading', { name: 'Item 1' })).toBeTruthy()
    expect(screen.getByText('Precio: 100 Platinum')).toBeTruthy()

    await userEvent.click(screen.getByRole('button', { name: 'Agregar al carrito' }))
    expect(onAdd).toHaveBeenCalledWith(productosDemo[0])
  })
})
