import { render, screen } from '@testing-library/react'
import FormField from './FormField'

describe('Molecule: FormField', () => {
  it('3. asocia el label con el input y muestra el mensaje de error', () => {
    render(<FormField id="nombre" label="Nombre" error="Campo requerido" />)
    expect(screen.getByLabelText('Nombre')).toBeTruthy()
    expect(screen.getByText('Campo requerido')).toBeTruthy()
  })
})
