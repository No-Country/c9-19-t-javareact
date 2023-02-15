import { Card, Button, Container } from "react-bootstrap"
import { useLocation, useParams } from "react-router-dom"

const UsuarioInfo = () => {
  const userId = useParams();
  const state = useLocation()

  console.log(userId)

  const { dni, id, last_name, name, rol_id } = state.state.data

  return (
    <Container>
      <h2>{name} {last_name}</h2>
      <h3>{id}</h3>
      <h3>{rol_id === "1" ? "Profesor" : rol_id === "2" ? "Tutor" : "Estudiante"}</h3>
      <h3>{dni}</h3>
    </Container>
  )
}
export default UsuarioInfo