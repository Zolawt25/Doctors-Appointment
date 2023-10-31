import { useState } from 'react'
import Navbar from '../components/Navbar'
import { doctors } from "../assets/data/doctors"
import { East, Star } from '@mui/icons-material'
import Footer from '../components/Footer'

const Find = () => {
    const [doctor, setDoctor] = useState(doctors)
    
    return (
    <div>
      <Navbar/>
      <div className='findWrapper'>
        <div className='findSearch'>
            <h2>Find a Doctor</h2>
            <form>
                <input type="text" placeholder='search by doctor name or specialization'/>
                <button type='button'>search</button>
            </form>
        </div>
        <div className='doctorsContainer2'>
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
      </div>
      <Footer/>
    </div>
  )
}

export default Find
