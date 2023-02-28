import Table from 'react-bootstrap/Table';
import { Qualification } from '../../models/Qualification';

    interface Props {
        subjects: Array<any>;
    }

    const TableStudentQualification: React.FC<Props> = ({
        subjects
    }) => {

    

    const getPromedio = (data: any): string => {
        let total = 0;
        let notas = 0;
        if (data.FIRST_TRIMESTER) {
            total += data.FIRST_TRIMESTER;
            notas += 1 
        }
        if (data.SECOND_TRIMESTER) {
            total += data.SECOND_TRIMESTER;
            notas += 1 
        }
        if (data.THIRD_TRIMESTER) {
            total += data.THIRD_TRIMESTER;
            notas += 1 
        }
        return notas > 0 ? (total / notas).toFixed(2) : '-';
    }

    return (
        <Table striped hover borderless style={{textAlign: 'center'}}>
            <thead>
                <tr>
                <th>#</th>
                <th>Materia</th>
                <th>1er Trimestre</th>
                <th>2er Trimestre</th>
                <th>3er Trimestre</th>
                <th>Promedio</th>
                </tr>
            </thead>
            <tbody>
                {
                    subjects.map( (subject, index) => (
                        <tr key={index} className={(Number(getPromedio(subject.qualifications!)) > 0 && Number(getPromedio(subject.qualifications!))< 6) ? 'row-disaprove' : 'row-aprove'}>
                            <td>{index + 1}</td>
                            <td>{subject.subjectName }</td>
                            <td style={{textAlign: '-webkit-center'}}>
                                {
                                    subject.qualifications.FIRST_TRIMESTER ? subject.qualifications.FIRST_TRIMESTER : '-'
                                }
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                            {
                                    subject.qualifications.SECOND_TRIMESTER ? subject.qualifications.SECOND_TRIMESTER : '-'
                                }
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                            {
                                    subject.qualifications.THIRD_TRIMESTER ? subject.qualifications.THIRD_TRIMESTER : '-'
                                }
                            </td>
                            <td> <strong> {getPromedio(subject.qualifications!)}</strong> </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
    );
};
export default TableStudentQualification;