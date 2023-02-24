import Table from 'react-bootstrap/Table';
import { Qualification } from '../../models/Qualification';

    interface Props {
        subjects: Array<any>;
    }

    const TableStudentQualification: React.FC<Props> = ({
        subjects
    }) => {

    

    const getPromedio = (data: Array<Qualification>): string => {
        let total = 0;
        let notas = 0;
        data.map((q) => {
            if (q.numberQualification) {
                total += q.numberQualification!
                notas += 1 
            }
            
        });
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
                            <td>{subject.subject_name }</td>
                            <td style={{textAlign: '-webkit-center'}}>
                                {
                                    subject.qualifications![0] ? subject.qualifications![0].numberQualification : '-'
                                }
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                            {
                                    subject.qualifications![1] ? subject.qualifications![0].numberQualification : '-'
                                }
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                            {
                                    subject.qualifications![2] ? subject.qualifications![0].numberQualification : '-'
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