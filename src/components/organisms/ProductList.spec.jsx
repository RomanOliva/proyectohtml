import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductList from './ProductList'
import { productosDemo } from '../../test/fixtures'

describe('Organism: ProductList', () => {
  it('6. filtra las tarjetas del DOM al escribir en el buscador', async () => {
    render(<ProductList productos={productosDemo} onAdd={() => {}} />)
    expect(screen.getAllByRole('button', { name: 'Agregar al carrito' }).length).toBe(3)

    await userEvent.type(screen.getByLabelText('Buscar item'), 'fish')

    expect(screen.queryByText('Item 1')).toBeNull()
    expect(screen.getByText('Fish')).toBeTruthy()
  })
})
