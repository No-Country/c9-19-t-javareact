import { User } from '../../models/User';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Qualification } from '../../models/Qualification';
import { useState } from 'react';

    interface Props {
    students: Array<User>;
    setStudentindex: (value: number) => void;
    setSelectedStudent: (value: User) => void;
    setSelectedQualification: (value: any) => void;
    setShowModal: (value: boolean) => void;
    }

    const TableQualification: React.FC<Props> = ({
        students,
        setStudentindex,
        setSelectedStudent,
        setSelectedQualification,
        setShowModal,
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

    const handleOnChange = (index: number, student: User, qualification: any, period_id: number) => {
        if (!qualification) {
            qualification = {'period_id': period_id}
        }
        setStudentindex(index);
        setSelectedStudent(student);
        setSelectedQualification(qualification);
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
                    students.map( (student, index) => (
                        <tr key={index} className={(Number(getPromedio(student.qualifications!)) > 0 && Number(getPromedio(student.qualifications!))< 6) ? 'row-disaprove' : 'row-aprove'}>
                            <td>{index + 1}</td>
                            <td>{student.name} {student.last_name}</td>
                            <td>{student.dni}</td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                <Form.Control
                                        type="text"
                                        onClick={() => handleOnChange(index, student, student.qualifications![0], 1)}
                                        value={ student.qualifications![0] ? student.qualifications![0].numberQualification : '-'} 
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                <Form.Control
                                        type="text"
                                        disabled={student.qualifications![0] === undefined}
                                        onClick={() => handleOnChange(index, student, student.qualifications![1], 2)}
                                        value={student.qualifications![1] ? student.qualifications![1].numberQualification : '-'}                           
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                    <Form.Control
                                        type="text"
                                        disabled={student.qualifications![1] === undefined}
                                        onClick={() => handleOnChange(index, student, student.qualifications![2], 3)}
                                        value={student.qualifications![2] ? student.qualifications![2].numberQualification : '-'}
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