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
        let total = 0
        data.map((q) => total += q.numerical_qualification!);
        return (total / 3).toFixed(2);
    }

    const handleOnChange = (index: number, student: User, qualification: any) => {
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
                        <tr key={index} className={Number(getPromedio(student.qualifications!)) >= 6 ? 'row-aprove' : 'row-disaprove'}>
                            <td>{index + 1}</td>
                            <td>{student.name} {student.last_name}</td>
                            <td>{student.dni}</td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                <Form.Control
                                        type="text"
                                        onClick={() => handleOnChange(index, student, student.qualifications![0])}
                                        value={ student.qualifications![0] ? student.qualifications![0].numerical_qualification : '-'} 
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                <Form.Control
                                        type="text"
                                        disabled={student.qualifications![0] === undefined}
                                        onClick={() => handleOnChange(index, student, student.qualifications![1])}
                                        value={student.qualifications![1] ? student.qualifications![1].numerical_qualification : '-'}                           
                                        style={{width: '5em', cursor: 'pointer'}}                          
                                        />
                                </Form>    
                            </td>
                            <td style={{textAlign: '-webkit-center'}}>
                                <Form>
                                    <Form.Control
                                        type="text"
                                        disabled={student.qualifications![1] === undefined}
                                        onClick={() => handleOnChange(index, student, student.qualifications![2])}
                                        value={student.qualifications![2] ? student.qualifications![2].numerical_qualification : '-'}
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