import { Form } from 'react-bootstrap'
import Input from '../atoms/Input'

// Label + Input + mensaje de error. Compatible con register() de react-hook-form.
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
