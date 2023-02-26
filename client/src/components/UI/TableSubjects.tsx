import { CommissionSubject } from '../../models/CommissionSubject';
import Table from 'react-bootstrap/Table';
import ButtonMain from './ButtonMain';
import ButtonOutlineMain from './ButtonOutlineMain';

interface Props {
  subjects: Array<CommissionSubject>;
  handleUpdateTeacher: (value: CommissionSubject, value2: number) => void;
  handleAddTeacher: (value: CommissionSubject, value2: number) => void;
}

const TableSubjects: React.FC<Props> = ({
    subjects,
    handleUpdateTeacher,
    handleAddTeacher,
}) => {
  return (
    <Table striped hover borderless>
        <thead>
            <tr>
            <th>#</th>
            <th>Materia</th>
            <th>Profesor</th>
            <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {
                subjects.map( (subject, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{subject.subject!.subjectName}</td>
                        {
                            subject.teacher ?
                            <td>
                                {subject.teacher!.firstName} {subject.teacher!.lastName} 
                            </td>
                            :
                            <td>
                                Sin Profesor asignado
                            </td>
                        }
                        <td> 
                            {
                                subject.teacher
                                ?
                                <ButtonOutlineMain 
                                    text={'Modificar Profesor'}
                                    size="md"
                                    icon="fa fa-edit"
                                    onClick={() => handleUpdateTeacher(subject, index)}
                                
                                />
                                :
                                <ButtonMain 
                                    text={'Asignar Profesor'}
                                    size="md"
                                    icon="fa fa-add"
                                    onClick={() => handleUpdateTeacher(subject, index)}
                                
                                />
                            }
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
    </Table>
  );
};
export default TableSubjects;