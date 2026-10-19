import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="parodia">404</h1>
      <Link to="/" className="text-info">Volver al inicio</Link>
    </div>
  )
}
