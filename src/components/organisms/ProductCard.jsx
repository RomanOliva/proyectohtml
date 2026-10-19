import { Card } from 'react-bootstrap'
import Button from '../atoms/Button'
import Image from '../atoms/Image'
import CardBody from '../molecules/CardBody'

function ProductCard({ producto, onAdd }) {
  return (
    <Card className="item h-100">
      <Image src={producto.imagen} alt={producto.nombre} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <CardBody title={producto.nombre} price={producto.precio} />
        <Button variant="info" className="mt-auto" onClick={() => onAdd(producto)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
