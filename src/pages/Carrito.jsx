import { Container } from 'react-bootstrap'
import CartTable from '../components/organisms/CartTable'

export default function Carrito({ carrito, onRemove }) {
  return (
    <Container>
      <h1 className="parodia">Tu carrito</h1>
      <CartTable carrito={carrito} onRemove={onRemove} />
    </Container>
  )
}
