import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Atom: Text', () => {
  it('2. renderiza la etiqueta HTML indicada en la prop variant', () => {
    render(<Text variant="h1">Título</Text>)
    expect(screen.getByRole('heading', { level: 1, name: 'Título' })).toBeTruthy()
  })
})
