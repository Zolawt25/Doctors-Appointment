import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Star } from '@mui/icons-material'
// import Feedback from '../components/Feedback';
import AboutDoctor from '../components/AboutDoctor';
import Footer from "../components/Footer"
import DoctorPageRight from '../components/DoctorPageRight';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const DoctorPage = () => {
    const [about, setAbout] = useState(true)
    const [doctor, setDoctor] = useState([])
    const [isTrue, setIsTrue] = useState(true)
    const [value, setValue] = useState(5)
    const id = useLocation().pathname.split("/")[2]
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`http://localhost:3000/api/doctor/${id}`)
            setDoctor([res.data.doctor])
        }
        fetchData()
    },[])
    console.log(doctor)
    return (
        <div>
            <Navbar/>
            {
                doctor.map((item)=>{
                    return (
                            <div className='doctorPageWrapper'>
                            <div className='doctorPageLeft'>
                                <div className='doctorPageDoctor'>
                                    <div className='doctorPageImg'>
                                        <img src={item.photo} alt={item.name}/>
                                    </div>
                                    <div className='doctorPageInfo'>
                                        <p className='doctorPageInfoP'>{item.specialty}</p>
                                        <h4>{item.name}</h4>
                                        <span><Star style={{color: "gold", fontSize: "17px"}}/> 4.5<i>(2)</i></span>
                                        <p className='doctorPageInfoSkill'>Specialization in {item.specialty}</p>
                                    </div>
                                </div>
                                <div className='doctorPageDesc'>
                                    <div className='doctorPageLinks'>
                                        <p className={about && "doctorPageLinksA"} onClick={()=>setAbout(true)}>About</p>
                                        <p className={!about && "doctorPageLinksA"} onClick={()=>setAbout(false)}>Feedback</p>
                                    </div>
                                    <div className='doctorPageDesc'>
                                        {
                                            about ?  <AboutDoctor name={item.name}/>
                                            :
                                            <div className='doctorPageFeedback'>
            <h4 className='doctorPageAboutTitle'>All Reviews(2)</h4>
            <div className='doctorPageReviewCont'>
                <div className='doctorPageReviewId'>
                    <div className='doctorPageReviewProfile'>
                        <div className='doctorPageReviewImg'>
                            <img src="/img/doctor-img03.png" alt="doctor-img03.png" />
                        </div>
                        <div>
                            <p className='doctorPageReviewName'>Ahmed Ali</p>
                            <p className='doctorPageReviewDate'>june 27, 2023</p>
                        </div>
                    </div>
                    <div className='doctorPageReviewStar'>
                    <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small"/>
                    </Stack>
                    </div>
                </div>
                <p className='doctorPageReviewComment'>He is a good doctor</p>
            </div>
            <div className='doctorPageReviewCont'>
                <div className='doctorPageReviewId'>
                    <div className='doctorPageReviewProfile'>
                        <div className='doctorPageReviewImg'>
                            <img src="/img/doctor-img03.png" alt="doctor-img03.png" />
                        </div>
                        <div>
                            <p className='doctorPageReviewName'>Ahmed Ali</p>
                            <p className='doctorPageReviewDate'>june 27, 2023</p>
                        </div>
                    </div>
                    <div className='doctorPageReviewStar'>
                    <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small"/>
                    </Stack>
                    </div>
                </div>
                <p className='doctorPageReviewComment'>He is a good doctor</p>
            </div>
            <div className='feedbackcontainer'>
                {
                    isTrue ? 
                    <div className='feedbackBtn'>
                        <button onClick={()=> setIsTrue(false)}>Give Feedback</button>
                    </div> :
                    <div className='feedbackInputcontainer'>
                        <div className='feedbackStars'>
                            <p>How would you rate the overall experience?*</p>
                            <div>
                                <Stack spacing={1}>
                                    <Rating name="simple-controlled" size="small" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                                </Stack>
                            </div>
                        </div>
                        <div className='feedbackInput'>
                            <p>Share your feedback or suggestions.*</p>
                            <textarea rows="8" cols="70" placeholder='Write your message...'></textarea>
                            <button>Submit Feedback</button>
                        </div>
                    </div>
                }
                
            </div>
        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <DoctorPageRight/>
                        </div>
                    )
                })
            }
            <Footer/>
        </div>
    )
}

export default DoctorPage
