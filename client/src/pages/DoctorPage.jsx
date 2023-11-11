import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Delete, Star } from '@mui/icons-material'
import AboutDoctor from '../components/AboutDoctor';
import Footer from "../components/Footer"
import DoctorPageRight from '../components/DoctorPageRight';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import BtnLoading from '../components/BtnLoading';
import Loading from '../components/Loading';

const DoctorPage = () => {
    const [about, setAbout] = useState(true)
    const [doctor, setDoctor] = useState([])
    const [comment, setComment] = useState([])
    const [filteredcomment, setFilteredComment] = useState([])
    const [message, setMessage] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isTrue, setIsTrue] = useState(true)
    const [AddComment, setAddComment] = useState(true)
    const [value, setValue] = useState(0)
    const id = useLocation().pathname.split("/")[2]
    const cookie = new Cookies()
    const token = cookie.get("user") 
    const decode = token ? jwtDecode(token) : ""

    const addComment = async ()=>{
        if (!token) {
            alert("you must login first")
        }else{
            setBtnLoading(true)
            const res = await axios.post(`https://doctors-appointment-server-eta.vercel.app/api/doctor/${id}/comments`, {
                comment: message, doctorId: id, username: decode.name,
                userId: decode.userId, rating: value
            })
            setAbout(true)
            setAddComment(!AddComment)
            setBtnLoading(false)
            return res
        }
    }
    const deleteComment = async (commentId)=>{
        try {
            const res = await axios.delete(`https://doctors-appointment-server-eta.vercel.app/api/doctor/${id}/comments/${commentId}`)
            setAbout(true)
            setAddComment(!AddComment)
            return res
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        const fetchData = async()=>{
            setIsLoading(true)
            const res = await axios.get(`https://doctors-appointment-server-eta.vercel.app/api/doctor/${id}`)
            setIsLoading(false)
            setDoctor([res.data.doctor])
            setAbout(false)
            setTimeout(() => {
                setAbout(true)
            }, 1);
        }
        fetchData()
    },[])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`https://doctors-appointment-server-eta.vercel.app/api/doctor/${id}/comments`)
            setComment(res.data.comment)
            setTimeout(async () => {
                setAbout(false)
            }, 1);
        }
        fetchData()
    },[AddComment])

    useEffect(()=>{
         const filtered = comment.filter((item)=>{
                if (item.doctorId === id) {
                    return item
                }
            })
            setFilteredComment(filtered)
    },[AddComment, about])
    
    let ave = [] 
    const total = ()=> filteredcomment.forEach((item)=>{
        ave =  [...ave, item.rating]
      })  
      total()
      let average = 0
      const findAverage = ()=>{
        if (ave.length === 0) {
          average = 0
        }else{
          for (let index = 0; index < ave.length; index++) {
          let element = ave[index];
          average += element
          }
          average =Number(average / ave.length).toFixed(1)
        }
         
      }
      findAverage()
      
    return (
        <div>
            <Navbar/>
            {isLoading && <div className='loadingContainer'>
                    <Loading/>
            </div>}
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
                                        <span><Star style={{color: "gold", fontSize: "17px"}}/> {average === 0 ? "Not Rated" : average}<i>({filteredcomment.length})</i></span>
                                        <p className='doctorPageInfoSkill'>Specialization in {item.specialty}</p>
                                    </div>
                                </div>
                                <div className='doctorPageDesc'>
                                    <div className='doctorPageLinks'>
                                        <p className={about && "doctorPageLinksA"} onClick={()=>setAbout(true)}>About</p>
                                        <p className={!about && "doctorPageLinksA"} onClick={()=>setAbout(false)}>Feedback</p>
                                    </div>
                                    <div className='doctorPageDesc'>
                                        
                                              <div style={{display: `${about? "block" : "none"}`}}><AboutDoctor name={item.name}/></div>
                                            
                                            <div className='doctorPageFeedback' style={{display: `${about? "none" : "block"}`}}>
                                            <h4 className='doctorPageAboutTitle' id='review'>All Reviews({filteredcomment.length})</h4>
                                            {filteredcomment.length === 0 && <p style={{fontSize: "14px", color: "#444"}}>be first to comment...</p>}
                                            {filteredcomment.map((item)=>{
                                                let date = new Date(item.createdAt).toString().slice(0, 16)
                                                return  <div className='doctorPageReviewCont' key={item._id}>
                                                        <div className='doctorPageReviewId'>
                                                            <div className='doctorPageReviewProfile'>
                                                                <div className='doctorPageReviewImg'>
                                                                    {/* <img src="/img/doctor-img03.png" alt="doctor-img03.png" /> */}
                                                                    <p>{item.username.slice(0,2)}</p>
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
                                                                <div onClick={()=> deleteComment(item._id)}>
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
                                                            <button onClick={()=>addComment()} style={{display: "block", transition: "0.3s"}}>{btnLoading ? <BtnLoading/> : "Submit Feedback"}</button>
                                                        </div>
                                                    </div>
                                                }
                                                
                                                </div>
                                            </div>
                                        
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