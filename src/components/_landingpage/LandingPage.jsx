import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import HeroComponent from '@/components/_landingpage/layout_section/HeroComponent';
import NavBarComponent from '@/components/_landingpage/layout_section/NavBarComponent';
import ServicesComponent from '@/components/_landingpage/layout_section/ServicesComponent';
import TeamComponent from '@/components/_landingpage/layout_section/TeamComponent';
import '@/App.css'


const LandingPage = () => {
 
    return (
        <div className="container-fluid">
            <NavBarComponent />
            <HeroComponent />
            <ServicesComponent /> 
            <TeamComponent />
        </div>
    )
}

export default LandingPage