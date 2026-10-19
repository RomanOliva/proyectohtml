import { Form } from 'react-bootstrap'
import Input from '../atoms/Input'

function FormField({ id, label, error, ...inputProps }) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Input isInvalid={!!error} {...inputProps} />
      {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  )
}

export default FormField
