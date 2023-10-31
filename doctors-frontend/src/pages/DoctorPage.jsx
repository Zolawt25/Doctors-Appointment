import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Star } from '@mui/icons-material'
import Feedback from '../components/Feedback';
import AboutDoctor from '../components/AboutDoctor';
import Footer from "../components/Footer"
import DoctorPageRight from '../components/DoctorPageRight';
const DoctorPage = () => {
    const [about, setAbout] = useState(true)

    return (
        <div>
            <Navbar/>
            <div className='doctorPageWrapper'>
                <div className='doctorPageLeft'>
                    <div className='doctorPageDoctor'>
                        <div className='doctorPageImg'>
                            <img src="/img/doctor-img01.png" alt="doctor-img01.png"/>
                        </div>
                        <div className='doctorPageInfo'>
                            <p className='doctorPageInfoP'>Surgeon</p>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <span><Star style={{color: "gold", fontSize: "17px"}}/> 4.5<i>(2)</i></span>
                            <p className='doctorPageInfoSkill'>Specialization in Surgeon</p>
                        </div>
                    </div>
                    <div className='doctorPageDesc'>
                        <div className='doctorPageLinks'>
                            <p className={about && "doctorPageLinksA"} onClick={()=>setAbout(true)}>About</p>
                            <p className={!about && "doctorPageLinksA"} onClick={()=>setAbout(false)}>Feedback</p>
                        </div>
                        <div className='doctorPageDesc'>
                            {
                                about ? <AboutDoctor/>
                                :
                                <Feedback/>
                            }
                        </div>
                    </div>
                </div>
                <DoctorPageRight/>
            </div>
            <Footer/>
        </div>
    )
}

export default DoctorPage
