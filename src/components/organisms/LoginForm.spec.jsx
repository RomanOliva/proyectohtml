import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './LoginForm'

describe('Organism: LoginForm', () => {
  it('8. muestra errores y NO envía el formulario si los campos están vacíos', async () => {
    const onLogin = jasmine.createSpy('onLogin')
    render(<MemoryRouter><LoginForm onLogin={onLogin} /></MemoryRouter>)

    await userEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(await screen.findByText('Debes ingresar tu usuario.')).toBeTruthy()
    expect(screen.getByText('Debes ingresar tu contraseña.')).toBeTruthy()
    expect(onLogin).not.toHaveBeenCalled()
  })
})
