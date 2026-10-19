import { Form } from 'react-bootstrap'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

function SearchBar({ value, onChange }) {
  return (
    <Form className="buscador" role="search" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="search"
        placeholder="Buscar item..."
        aria-label="Buscar item"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button type="submit" variant="secondary">Buscar</Button>
    </Form>
  )
}

export default SearchBar
