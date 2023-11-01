import { useState, useEffect } from 'react'
// import { doctors } from "../assets/data/doctors"
import { East, Star } from '@mui/icons-material'
import axios from 'axios'
import Loading from './Loading'
const Doctors = () => {
    const [doctor, setDoctor] = useState([])
   const [isLoading, setIsLoading] = useState(false)
 
 
 
 
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                setIsLoading(true)
                const res = await axios.get("http://localhost:3000/api/doctors")
                setDoctor(res.data.doctor)
                setIsLoading(false)
            } catch (error) {
                alert("sorry something went wrong!")
            }
        }
        fetchData()
    },[])
    return (
        <div className='doctorsContainer'>
        <h2>Our great doctors</h2>
        <p className='serviceP'>World-class care for evryone. Our health system offers</p>
        <p className='serviceP'>unmatched, expert health care.</p>
        <div className='doctorsWrapper'>
        {isLoading && <div className='loadingContainer'>
            <Loading/>
        </div>}
            {
                doctor.map((item)=>{
                    return(
                        <div className='doctorsDoctor' key={item._id}>
                            <div className='doctorsImg'>
                                <img src={item.photo} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <div className='doctorsSkill'>
                                <p>{item.specialty}</p>
                                <div className='doctorsStar'>
                                    <span><Star style={{color: "gold", fontSize: "17px"}}/></span>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className='doctorsHospital'>
                                <p>{item.hospital}</p>
                                <a href={`/find/${item._id}`} className='doctorsHospitalIcon'>
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
