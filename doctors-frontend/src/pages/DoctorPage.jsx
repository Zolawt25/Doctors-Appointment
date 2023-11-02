import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Delete, Star } from '@mui/icons-material'
// import Feedback from '../components/Feedback';
import AboutDoctor from '../components/AboutDoctor';
import Footer from "../components/Footer"
import DoctorPageRight from '../components/DoctorPageRight';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

const DoctorPage = () => {
    const [about, setAbout] = useState(true)
    const [doctor, setDoctor] = useState([])
    const [comment, setComment] = useState([])
    const [filteredcomment, setFilteredComment] = useState([])
    const [message, setMessage] = useState("")




    const [isTrue, setIsTrue] = useState(true)
    const [AddComment, setAddComment] = useState(true)
    const [value, setValue] = useState(0)
    const id = useLocation().pathname.split("/")[2]
    const cookie = new Cookies()
    const token = cookie.get("user") 
    const decode = token ? jwtDecode(token) : ""

    const addComment = async ()=>{
        const res = await axios.post(`http://localhost:3000/api/doctor/${id}/comments`, {
            comment: message, doctorId: id, username: decode.name,
            userId: decode.userId, rating: value
        })
        setAbout(true)
        setTimeout(async () => {
            setAbout(false)
        }, 300);
        setAddComment(!AddComment)
        return res
    }
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`http://localhost:3000/api/doctor/${id}`)
            setDoctor([res.data.doctor])
        }
        fetchData()
    },[])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`http://localhost:3000/api/doctor/${id}/comments`)
            setComment(res.data.comment)
        }
        fetchData()
    },[AddComment])

    useEffect(()=>{
         const filtered = comment.filter((item)=>{
                if (item.doctorId === id) {
                    return item
                }
            })
            console.log(filtered)
            setFilteredComment(filtered)
    },[AddComment, about])
    
    const deleteComment = async (commentId)=>{
        const res = await axios.delete(`http://localhost:3000/api/doctor/${id}/comments/${commentId}`)
        setAbout(true)
        setTimeout(async () => {
            setAbout(false)
        }, 300);
        setAddComment(!AddComment)
        return res
    }
    return (
        <div>
            <Navbar/>
            {
                doctor.map((item)=>{
                    return (
                            <div className='doctorPageWrapper' key={item._id}>
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
                                            <h4 className='doctorPageAboutTitle'>All Reviews({filteredcomment.length})</h4>
                                            {filteredcomment.length === 0 && <p>be first to comment...</p>}
                                            {filteredcomment.map((item)=>{
                                                let date = new Date(item.createdAt).toString().slice(0, 16)
                                                return  <div className='doctorPageReviewCont' key={item._id}>
                                                        <div className='doctorPageReviewId'>
                                                            <div className='doctorPageReviewProfile'>
                                                                <div className='doctorPageReviewImg'>
                                                                    <img src="/img/doctor-img03.png" alt="doctor-img03.png" />
                                                                </div>
                                                                <div>
                                                                    <p className='doctorPageReviewName'>{item.username}</p>
                                                                    <p className='doctorPageReviewDate'>{date}</p>
                                                                </div>
                                                            </div>
                                                            <div className='doctorPageReviewStar'>
                                                            <Stack spacing={1}>
                                                            <Rating name="read-only" value={item.rating} readOnly size="small"/>
                                                            </Stack>
                                                            {decode.userId === item.userId &&
                                                                <div onClick={()=> deleteComment(item.doctorId)}>
                                                                    <Delete style={{fontSize: "15px", marginLeft: "8px", cursor: "pointer", color: "#1350ee"}}/>
                                                                </div>
                                                             }
                                                            </div>
                                                        </div>
                                                        <p className='doctorPageReviewComment'>{item.comment}</p>
                                                    </div>
                                            })}
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
                                                            <textarea rows="8" cols="70" placeholder='Write your message...' onChange={(e)=> setMessage(e.target.value)}></textarea>
                                                            <button onClick={()=>addComment()}>Submit Feedback</button>
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
