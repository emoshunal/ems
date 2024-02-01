import React from 'react'
import HeroImage from '@/assets/img/itsolution.gif'
import { motion, useScroll } from "framer-motion";

const HeroComponent = () => {
    const { scrollY } = useScroll();
    return (
        <motion.div className="hero min-h-screen bg-base-200 " id="hero">
            <motion.div animate={{ x:100, scale:1 }} initial={{ scale:0}}>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-3xl md:text-5xl  lg:text-8xl font-bold">IT <small className='text-teal-500'>Solutions</small></h1>
                        <p className="pt-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
                        <p className="pb-6">In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-info">Get Started</button>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }}>  <img src={HeroImage} className="lg:w-96 rounded-lg shadow-2xl mx-4" /></motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default HeroComponent