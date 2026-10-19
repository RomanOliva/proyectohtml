import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/organisms/LoginForm'

export default function Login() {
  const navigate = useNavigate()
  return (
    <Container className="d-flex justify-content-center">
      <LoginForm onLogin={() => navigate('/')} />
    </Container>
  )
}
