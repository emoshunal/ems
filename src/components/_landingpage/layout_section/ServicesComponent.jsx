import React from 'react'
import CybersecurityImage from '@/assets/img/cybersecurity.jpg'
import WebDevImage from '@/assets/img/web_development.jpg'
import SysAdImage from '@/assets/img/sysad.jpg'
import ResearchImage from '@/assets/img/research_projects.jpg'
import NetworkImage from '@/assets/img/network_admin.jpg'
import MobileDevImage from '@/assets/img/mobiledev.jpg'
import { motion, useScroll } from "framer-motion"


const ServicesComponent = () => {
    const { scrollY } = useScroll();
    return (
        <div className="min-h-screen bg-base-200 " id="services">
            <div className="flex flex-wrap justify-center pt-24">
                <h1 className="text-2xl md:text-4xl  lg:text-7xl font-bold">Our <small className='text-teal-500'>Services</small></h1>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="pt-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="pt-0 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
            <div className="flex flex-wrap justify-center gap-24">

                <div className="card w-1/4 bg-base-100 shadow-xl image-full">
                    <figure><img src={CybersecurityImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center pt-24">
                            <button className='btn-lg z-0 text-3xl  text-gray-800 font-semibold'>Cybersecurity</button>
                        </div>
                    </div>
                </div>

                <div className="card w-1/4 bg-base-100 shadow-xl image-full">
                    <figure><img src={WebDevImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center pt-24">
                            <button className='btn-lg text-3xl font-semibold'>Website Development</button>
                        </div>

                    </div>
                </div>
                <div className="card w-1/4 bg-base-100 shadow-xl image-full">
                    <figure><img src={MobileDevImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center pt-24">
                            <button className='btn-lg text-3xl font-semibold'>Mobile App Development</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-24 py-12">
                <div className="card w-1/4 bg-base-100 shadow-xl image-full">
                    <figure><img src={SysAdImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center pt-24">
                            <button className='btn-lg text-3xl font-semibold'>System Administration</button>
                        </div>

                    </div>
                </div>
                <div className="card w-1/4 bg-base-100 shadow-xl image-full">
                    <figure><img src={NetworkImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center pt-24">
                            <button className='btn-lg text-3xl font-semibold'>Network Administration</button>
                        </div>

                    </div>
                </div>
                <div className="card w-1/4 bg-base-100 shadow-xl image-full">
                    <figure><img src={ResearchImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center pt-24">
                            <button className='btn-lg text-3xl font-semibold'>IT Reseach</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServicesComponent