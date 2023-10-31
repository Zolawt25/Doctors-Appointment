import React, { useState } from 'react'
import { doctors } from "../assets/data/doctors"
import { East, Star } from '@mui/icons-material'
const Doctors = () => {
    const [doctor, setDoctor] = useState(doctors)
    return (
        <div className='doctorsContainer'>
        <h2>Our great doctors</h2>
        <p className='serviceP'>World-class care for evryone. Our health system offers</p>
        <p className='serviceP'>unmatched, expert health care.</p>
        <div className='doctorsWrapper'>
            {
                doctor.map((item)=>{
                    return(
                        <div className='doctorsDoctor' key={item.id}>
                            <div className='doctorsImg'>
                                <img src={item.photo} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <div className='doctorsSkill'>
                                <p>{item.specialty}</p>
                                <div className='doctorsStar'>
                                    <span><Star style={{color: "gold", fontSize: "17px"}}/></span>
                                    <span>{item.avgRating}</span>
                                </div>
                            </div>
                            <div className='doctorsHospital'>
                                <p>{item.hospital}</p>
                                <a href='/find/aaa' className='doctorsHospitalIcon'>
                                    <East style={{fontSize: "15px", color: "#111"}}/>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Doctors
