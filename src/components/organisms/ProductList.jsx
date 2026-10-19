import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Text from '../atoms/Text'
import SearchBar from '../molecules/SearchBar'
import ProductCard from './ProductCard'
import { filtrarProductos } from '../../utils/carrito'

function ProductList({ productos, onAdd }) {
  const [busqueda, setBusqueda] = useState('')
  const visibles = filtrarProductos(productos, busqueda)

  return (
    <>
      <SearchBar value={busqueda} onChange={setBusqueda} />
      <Row className="g-4 justify-content-center items">
        {visibles.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard producto={p} onAdd={onAdd} />
          </Col>
        ))}
        {visibles.length === 0 && (
          <Text className="text-center text-white">
            No se encontraron items que coincidan con la búsqueda.
          </Text>
        )}
      </Row>
    </>
  )
}

export default ProductList
