import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Atom: Button', () => {
  it('1. muestra su contenido y ejecuta onClick (spy) al hacer clic', async () => {
    const onClick = jasmine.createSpy('onClick')
    render(<Button onClick={onClick}>Presionar</Button>)
    await userEvent.click(screen.getByRole('button', { name: 'Presionar' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
