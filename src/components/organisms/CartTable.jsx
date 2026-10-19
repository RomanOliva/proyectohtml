import Text from '../atoms/Text'
import CartRow from '../molecules/CartRow'
import { calcularTotal } from '../../utils/carrito'

function CartTable({ carrito, onRemove }) {
  if (carrito.length === 0) {
    return (
      <div className="panel-dark text-center">
        <Text className="mb-0">Tu carrito está vacío.</Text>
      </div>
    )
  }

  return (
    <div className="panel-dark">
      <div className="cart-list">
        {carrito.map((item) => (
          <CartRow key={item.id} item={item} onRemove={onRemove} />
        ))}
      </div>
      <div className="cart-total">
        <Text className="cart-total__texto mb-0">
          <strong>Total: {calcularTotal(carrito)} Platinum</strong>
        </Text>
      </div>
    </div>
  )
}

export default CartTable
