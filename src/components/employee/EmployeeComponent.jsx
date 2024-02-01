import React, { useEffect, useState } from 'react'
import { createEmployees } from '../../services/EmployeeService';
import HeaderComponents from '../layout/HeaderComponents';
import FooterComponents from '../layout/FooterComponents';
import { useNavigate } from 'react-router-dom';




const EmployeeComponent = () => {

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();
    function saveEmployee(e) {
        e.preventDefault();
        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee)
            createEmployees(employee).then((response) => {
                console.log(response.data)
                navigator('/employees')
            }).catch(error => {
                console.error(error)
            })
        }

    }
    function validateForm() {
        let valid = true

        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is requried';
            valid = false;
        }
        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }
        setErrors(errorsCopy);

        return valid;
    }
    return (
        <div className='md:container mx-auto flex flex-col min-h-screen'>
            <HeaderComponents />
            <div className="grid grid-cols-6 gap-4 py-12">
                <div className="col-start-3 col-span-3">
                    <a href="#" className='link link-neutral' onClick={navigator('/employees')}>View</a>
                    <article className='prose prose-lg w-full max-w-md text-center py-2'>
                        <h2>Add Employee</h2>
                    </article>
                </div>
                <div className=' col-start-3 col-span-3'>
                    {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" /> */}
                    <div className="label">
                        <span className="label-text">First Name:</span>
                    </div>
                    <input type="text" value={firstName} onChange={(e) => setFirstname(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-md" />
                </div>
                <div className=' col-start-3 col-span-3'>
                    <label htmlFor="" className="">
                        <div className="label">
                            <span className="label-text">Last Name:</span>
                        </div>
                        <input onChange={(e) => setLastname(e.target.value)} type="text" value={lastName} placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </label>
                </div>
                <div className=' col-start-3 col-span-3'>
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-md" />
                </div>
                <div className=' col-start-3 col-span-3 py-8'>
                    <button onClick={saveEmployee} className="w-full max-w-md btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Save</button>
                </div>
            </div>
            <FooterComponents />
        </div>
    )
}

export default EmployeeComponent