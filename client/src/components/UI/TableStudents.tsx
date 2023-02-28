import { Student } from '../../models/Student';
import Table from 'react-bootstrap/Table';
import ButtonOutlineMain from './ButtonOutlineMain';
import Badge from 'react-bootstrap/Badge';

interface Props {
  students: Array<Student>;
  handleDeleteStudent: (value: number) => void;
}

const TableStudents: React.FC<Props> = ({
    students,
    handleDeleteStudent,
}) => {
  return (
    <Table striped hover borderless>
        <thead>
            <tr>
            <th>#</th>
            <th>Nombre y apellido</th>
            <th>DNI</th>
            <th>Estado</th>
            <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map( (student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.firstName} {student.lastName}</td>
                        <td>{student.document}</td>
                        <td>
                            <Badge bg="primary">
                                Regular
                            </Badge> 
                        </td>
                        <td> 
                            <ButtonOutlineMain 
                                text={'Eliminar estudiante'}
                                size="md"
                                icon="fa fa-trash"
                                onClick={() => handleDeleteStudent(student.idInscription!)}
                            />
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
    </Table>
  );
};
export default TableStudents;