import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import RegisterForm from './RegisterForm'

describe('Organism: RegisterForm', () => {
  it('9. rechaza correos que no sean @gmail.com', async () => {
    render(<MemoryRouter><RegisterForm /></MemoryRouter>)

    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'a@hotmail.com')
    await userEvent.click(screen.getByRole('button', { name: 'Registrarse' }))

    expect(await screen.findByText('El correo debe ser una cuenta de @gmail.com')).toBeTruthy()
  })
})
