import React, { useEffect, useState } from 'react'
import { listEmployees } from '../../services/EmployeeService'
import HeaderComponents from '../layout/HeaderComponents';
import FooterComponents from '../layout/FooterComponents';
import { useNavigate } from 'react-router-dom'


const EmployeeListComponent = () => {
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();
    useEffect(() => {
        getAllEmployees();
    });

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewEmployee() {
        navigator('/employee/add')
    }


    return (
        <div className='md:container mx-auto flex flex-col min-h-screen'>
            <HeaderComponents />
            <div className="overflow-x-auto py-12">
                <article className='py-3 prose prose-base md:container'><h2 className='text-center'>List of Employees</h2></article>
                <button className="btn btn-md btn-success" onClick={addNewEmployee}>New Employee</button>
                <table className="table table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <FooterComponents />
        </div>
    )
}

export default EmployeeListComponent