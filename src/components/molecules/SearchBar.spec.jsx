import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar'

describe('Molecule: SearchBar', () => {
  it('4. llama a onChange (spy) con el texto que escribe el usuario', async () => {
    const onChange = jasmine.createSpy('onChange')
    render(<SearchBar value="" onChange={onChange} />)
    await userEvent.type(screen.getByLabelText('Buscar item'), 'a')
    expect(onChange).toHaveBeenCalledWith('a')
  })
})
