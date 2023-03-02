import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../styles/dashboard.css';
import '../styles/header.css';
import  {BarChart}  from '../components/barChart';
import faker from 'faker';

const data = [
    {usuario: 'Estudiantes', cantidad: 180, background: '#D1F3E0', color: '#3CB878', icon: 'fa fa-graduation-cap', id:1},
    {usuario: 'Comisiones', cantidad: 4, background: '#D1F3E0', color: '#3CB878', icon: 'fa fa-school', id:2}
]
const labels = ['comision 1', 'comision 2', 'comision 3', 'comision 4'];

export const dataChart = {
  labels,
  datasets: [
    {
      label: 'Aprobados',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      backgroundColor: 'rgba(20, 35, 138, 0.8)',
    },
    {
      label: 'Desaprobados',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      backgroundColor: 'rgba(156, 37, 77, 0.8)',
    },
    {
      label: 'No regulares',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 4})),
      backgroundColor: 'rgba(156, 37, 77, 0.8)',
    }
  ],
};

/*  */
function DashboardTeacher () {
    return (
        <Container>
            <Row className='header'>

                <Col xs={12}>
                    <h3 className='header-title'>Tutor</h3>
                    <div className='header-line'></div>
                </Col>
            </Row>

           
            <Row>
                {
                    data.map( (user: any) => (
                        <Col xs={12} md={6} className='d-flex justify-content-center mb-2' key={user.id}>
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
            <Row className="mb-2" xs={12}>
            <Col xs={12} md={12}>
                <BarChart data={dataChart}/>

                </Col>
{/*                 <Col xs={12} md={4}>
                <PieChart/>
                </Col> */}
            </Row>
        </Container>
    )
}

export default DashboardTeacher;