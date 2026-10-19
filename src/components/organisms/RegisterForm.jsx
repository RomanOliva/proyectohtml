import { useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import Text from '../atoms/Text'
import FormField from '../molecules/FormField'

function RegisterForm({ onRegister }) {
  const [exito, setExito] = useState(false)
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm()

  const enviar = (datos) => {
    if (onRegister) onRegister(datos)
    setExito(true)
    reset()
  }

  return (
    <Form noValidate onSubmit={handleSubmit(enviar)} className="panel-dark auth-box">
      <Text variant="h2" className="auth-titulo">Registrarse</Text>

      <FormField
        id="correo-registro"
        label="Correo electrónico"
        type="email"
        placeholder="Ingrese correo"
        autoComplete="email"
        error={errors.correo?.message}
        {...register('correo', {
          validate: (v) => {
            const correo = v.trim().toLowerCase()
            if (correo === '') return 'Debes ingresar tu correo.'
            if (!correo.endsWith('@gmail.com')) return 'El correo debe ser una cuenta de @gmail.com'
            return true
          },
        })}
      />

      <FormField
        id="password-registro"
        label="Contraseña"
        type="password"
        placeholder="Ingrese contraseña"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register('password', {
          required: 'Debes ingresar una contraseña.',
          minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres.' },
        })}
      />

      <FormField
        id="confirmar-registro"
        label="Confirmar contraseña"
        type="password"
        placeholder="Confirmar contraseña"
        autoComplete="new-password"
        error={errors.confirmar?.message}
        {...register('confirmar', {
          validate: (v) => v === getValues('password') || 'Las contraseñas no coinciden.',
        })}
      />

      {exito && <Alert variant="success">¡Cuenta creada con éxito! Ya puedes iniciar sesión.</Alert>}

      <Button type="submit" variant="info" className="w-100">Registrarse</Button>

      <Text className="auth-switch mt-3 mb-0">
        ¿Ya tiene cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </Text>
    </Form>
  )
}

export default RegisterForm
