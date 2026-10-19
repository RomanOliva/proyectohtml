import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="video-home">
      <h1 className="parodia">Basura Ki'teer</h1>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/-VuYCLelIO8?si=rCiKr3zKHg2Gcwrs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  )
}
