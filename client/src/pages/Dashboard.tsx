import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../styles/dashboard.css';
import '../styles/header.css';
import  {BarChart}  from '../components/barChart';

const data = [
    {usuario: 'Estudiantes', cantidad: 180, background: '#D1F3E0', color: '#3CB878', icon: 'fa fa-graduation-cap', id:1},
    {usuario: 'Profesores', cantidad: 6, background: '#E1F1FF', color: '#3F7AFC', icon: 'fa fa-user', id:2},
    {usuario: 'Tutores', cantidad: 140, background: '#FFF2D8', color: '#FFA002', icon: 'fa fa-users', id:3},
]
function Dashboard () {
    return (
        <Container>
            <Row className='header'>

                <Col xs={12}>
                    <h3 className='header-title'>Administrador</h3>
                    <div className='header-line'></div>
                </Col>
            </Row>
            <Row className="mb-5">
                <BarChart />
            </Row>
           
            <Row>
                {
                    data.map( (user: any) => (
                        <Col xs={12} md={4} className='d-flex justify-content-center' key={user.id}>
                            <Card className='card-dash' >
                                <Card.Body>
                                    <Row>
                                        <Col xs={6} md={6} className='card-line'>
                                            <div style={{background: user.background}} className='rounded-circle'>
                                                <i style={{color: user.color, fontSize: '1.8rem'}} className={user.icon}></i>
                                            </div>
                                        </Col>
                                        
                                        <Col xs={6} md={6} className='d-flex flex-column justify-content-center align-items-start'>
                                            <span className='card-amount'> {user.usuario}</span>
                                            <span> <strong> {user.cantidad} </strong> </span>
                                        </Col>
                                    </Row>
                                
                                </Card.Body>
                            </Card>
                        </Col>   
                        ))
                }
            </Row>
        </Container>
    )
}

export default Dashboard;