import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoLogin from '../../assets/img/logo-login.png';


const AuthCreateComponent = () => {
    const navigate = useNavigate()
    function loginAccount() {
        navigate("/login")
    }
    return (
        <div className="grid lg:grid-cols-8 gap-4 lg:py-44 py-12">
            <div className="lg:col-start-3 lg:col-span-4">
                <div className="card lg:card-side bg-zinc-100 shadow-xl">
                    <figure><img src={logoLogin} alt="Album" className='lg:w-96' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Welcom to SYS!</h2>
                        <p>To continue the service, create your account.</p>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered " />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Birthdate</span>
                            </div>
                            <input type="date" placeholder="Type here" className="input input-bordered " />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered " />
                        </label>
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered" />
                        </label>
                        <div className="card-actions grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <a onClick={loginAccount} className="link link-neutral">Sign in</a>
                            </div>
                            <div className="col-span-6">
                                <div className="flex justify-end">
                                    <button  className='btn btn-success btn-md sm:btn-sm md:btn-md lg:btn-lg mt-2 w-1/2'>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthCreateComponent