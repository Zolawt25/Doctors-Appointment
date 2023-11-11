import { useState, useEffect } from 'react'
// import { doctors } from "../assets/data/doctors"
import { East, Star } from '@mui/icons-material'
import axios from 'axios'
import Loading from './Loading'
const Doctors = () => {
    const [doctor, setDoctor] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [comment, setComment] = useState([])
 
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                setIsLoading(true)
                const res = await axios.get("https://doctors-appointment-server-eta.vercel.app/api/doctors")
                setDoctor(res.data.doctor)
                setIsLoading(false)
            } catch (error) {
                alert("sorry something went wrong!")
            }
        }
        fetchData()
    },[])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`https://doctors-appointment-server-eta.vercel.app/api/doctor/doc/comments`)
            setComment(res.data.comment)
        }
        fetchData()
    },[])
    const filterRating = (id)=>{
        let ave = []
        comment.filter((item)=>{
          if(item.doctorId === id){
            ave = [...ave, item.rating]
          }
        })
        let average = 0
        if (ave.length === 0) {
          average = 0
        }else{
          for (let index = 0; index < ave.length; index++) {
          let element = ave[index];
          average += element
          }
          average =Number(average / ave.length).toFixed(1)
        }
        return average
      }
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
                                    <span>{filterRating(item._id) === 0 ? "Not rated" : filterRating(item._id)}</span>
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
