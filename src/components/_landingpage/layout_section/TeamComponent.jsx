import React from 'react'
import Team1 from '@/assets/img/team1.jpg'
import Team2 from '@/assets/img/team2.jpg'


const TeamComponent = () => {
    return (
        <div className="min-h-screen bg-base-200" id="team">
            <div className="flex flex-wrap justify-center pt-24">
                <h1 className="text-2xl md:text-4xl  lg:text-7xl font-bold">Our <small className='text-teal-500'>Team</small></h1>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="pt-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
            </div>
            <div className="flex flex-wrap justify-center gap-36 pt-12">
                <div className="avatar">
                    <div className="w-72 rounded-full">
                        <img src={Team1} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-72 rounded-full">
                        <img src={Team2} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-72 rounded-full">
                        <img src={Team1} />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-36 pt-12">
                <div className="avatar">
                    <div className="w-72 rounded-full">
                        <img src={Team1} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-72 rounded-full">
                        <img src={Team2} />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default TeamComponent