import { Container } from 'react-bootstrap'

export default function Contacto() {
  return (
    <Container className="text-center">
      <h1 className="parodia">Contáctenos</h1>
      <a
        href="https://youtu.be/ggDbDRUauzo"
        target="_blank"
        rel="noreferrer"
        className="contactinio"
      >
        <p>Haz clic aquí para ver un súper video de nosotros</p>
        <img src="/imagenes/25doalxs2hcb1.jpg" alt="Video de nosotros" className="img-fluid" />
      </a>
    </Container>
  )
}
