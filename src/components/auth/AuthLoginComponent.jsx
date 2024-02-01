import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoLogin from '../../assets/img/logo-login.png';

const AuthLoginComponent = () => {
    const navigate = useNavigate()
    function HomePage() {
        console.log("Working")
    }
    function createAccount(){
        navigate("/account/create");
    }

    return (
        <div className="grid lg:grid-cols-8 gap-4 lg:py-44 py-12">
            <div className="lg:col-start-3 lg:col-span-4">
                <div className="card lg:card-side bg-zinc-100 shadow-xl">
                    <figure><img src={logoLogin} alt="Album" className='lg:w-96' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hello, welcome back!</h2>
                        <p>Please sign in to manage your account.</p>
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
                                <a className="link link-neutral" onClick={createAccount}>Create Account</a>
                            </div>
                            <div className="col-span-6">
                                <div className="flex justify-end">
                                    <button onClick={HomePage} className='btn btn-success btn-md sm:btn-sm md:btn-md lg:btn-lg mt-2 w-1/2'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AuthLoginComponent