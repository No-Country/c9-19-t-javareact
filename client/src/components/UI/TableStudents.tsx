import { User } from '../../models/User';
import Table from 'react-bootstrap/Table';
import ButtonOutlineMain from './ButtonOutlineMain';
import Badge from 'react-bootstrap/Badge';

interface Props {
  students: Array<User>;
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
                        <td>{student.name} {student.last_name}</td>
                        <td>{student.dni}</td>
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
                                onClick={() => handleDeleteStudent(student.id!)}
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