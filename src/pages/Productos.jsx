import { Container } from 'react-bootstrap'
import ProductList from '../components/organisms/ProductList'
import { productos } from '../data/productos'

export default function Productos({ onAdd }) {
  return (
    <Container>
      <h1 className="parodia">Basura Ki'teer</h1>
      <ProductList productos={productos} onAdd={onAdd} />
    </Container>
  )
}
