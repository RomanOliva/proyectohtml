import Text from '../atoms/Text'

function CardBody({ title, price }) {
  return (
    <>
      <Text variant="h3" className="h5">{title}</Text>
      <Text variant="p">Precio: {price} Platinum</Text>
    </>
  )
}

export default CardBody
