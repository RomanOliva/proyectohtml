import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import Text from '../atoms/Text'
import FormField from '../molecules/FormField'

function LoginForm({ onLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <Form noValidate onSubmit={handleSubmit(onLogin)} className="panel-dark auth-box">
      <Text variant="h2" className="auth-titulo">Iniciar Sesión</Text>

      <FormField
        id="usuario-login"
        label="Usuario"
        placeholder="Ingrese su nombre de usuario"
        autoComplete="username"
        error={errors.usuario?.message}
        {...register('usuario', {
          validate: (v) => v.trim() !== '' || 'Debes ingresar tu usuario.',
        })}
      />

      <FormField
        id="password-login"
        label="Contraseña"
        type="password"
        placeholder="Ingrese contraseña"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register('password', {
          validate: (v) => v.trim() !== '' || 'Debes ingresar tu contraseña.',
        })}
      />

      <Button type="submit" variant="info" className="w-100">Ingresar</Button>

      <Text className="auth-switch mt-3 mb-0">
        ¿No tiene cuenta? <Link to="/registro">Regístrate aquí</Link>
      </Text>
    </Form>
  )
}

export default LoginForm
