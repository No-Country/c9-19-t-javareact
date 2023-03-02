import { User } from '../../models/User';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Student } from '../../models/Student';
import { useState } from 'react';

    interface Props {
    students: Array<Student>;
    setStudentindex: (value: number) => void;
    setSelectedQualification: (value: any) => void;
    setSelectedStudent: (value: any) => void;
    setShowModal: (value: boolean) => void;
    setPeriod: (value: number) => void
    }

    const TableQualification: React.FC<Props> = ({
        students,
        setStudentindex,
        setSelectedQualification,
        setShowModal,
        setPeriod,
        setSelectedStudent,
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

    const handleOnChange = (index: number, qualification: any, period_id: number, student: Student) => {
        setPeriod(period_id)
        setStudentindex(index);
        setSelectedQualification(qualification);
        setSelectedStudent(student);
        setShowModal(true);
    }

    return (
        <Table striped hover borderless style={{textAlign: 'center'}}>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre y apellido</th>
                <th>DNI</th>
                <th>1er Trimestre</th>
                <th>2er Trimestre</th>
                <th>3er Trimestre</th>
                <th>Promedio</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map( (student: Student, index: number) => (
                        <tr key={student.idPerson} className={(Number(getPromedio(student.qualifications!)) > 0 && Number(getPromedio(student.qualifications!))< 6) ? 'row-disaprove' : 'row-aprove'}>
                            <td>{index + 1}</td>
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.document}</td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                <Form.Control
                                        type="text"
                                        onClick={() => handleOnChange(index, student.qualifications!.FIRST_TRIMESTER, 1, student)}
                                        value={ student.qualifications!.FIRST_TRIMESTER ? student.qualifications!.FIRST_TRIMESTER : '-'} 
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                <Form.Control
                                        type="text"
                                        disabled={student.qualifications!.FIRST_TRIMESTER === undefined}
                                        onClick={() => handleOnChange(index, student.qualifications!.SECOND_TRIMESTER, 2, student)}
                                        value={student.qualifications!.SECOND_TRIMESTER ? student.qualifications!.SECOND_TRIMESTER : '-'}                           
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                    <Form.Control
                                        type="text"
                                        disabled={student.qualifications!.SECOND_TRIMESTER === undefined}
                                        onClick={() => handleOnChange(index, student.qualifications!.THIRD_TRIMESTER, 3, student)}
                                        value={student.qualifications!.THIRD_TRIMESTER ? student.qualifications!.THIRD_TRIMESTER : '-'}
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            
                            
                            <td> <strong> {getPromedio(student.qualifications!)}</strong> </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
    );
};
export default TableQualification;