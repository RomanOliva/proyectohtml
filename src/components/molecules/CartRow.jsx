import Button from '../atoms/Button'
import Image from '../atoms/Image'
import Text from '../atoms/Text'

function CartRow({ item, onRemove }) {
  return (
    <div className="cart-item">
      {item.imagen && (
        <Image src={item.imagen} alt={item.nombre} className="cart-item__img" />
      )}

      <div className="cart-item__info">
        <Text variant="h3" className="cart-item__nombre">{item.nombre}</Text>
        <Text variant="p" className="cart-item__precio">{item.precio} Platinum c/u</Text>
      </div>

      <span className="cart-item__cantidad" aria-label={`Cantidad: ${item.cantidad}`}>
        x{item.cantidad}
      </span>

      <Text variant="p" className="cart-item__subtotal">
        {item.precio * item.cantidad} Platinum
      </Text>

      <Button size="sm" variant="outline-danger" onClick={() => onRemove(item.id)}>
        Quitar
      </Button>
    </div>
  )
}

export default CartRow
