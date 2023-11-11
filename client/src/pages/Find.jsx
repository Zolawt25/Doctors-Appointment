import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { East, Star } from '@mui/icons-material'
import Footer from '../components/Footer'
import axios from 'axios'
import Loading from '../components/Loading'

const Find = () => {
    const [doctor, setDoctor] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [comment, setComment] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setIsLoading(true)
                const res = await axios.get(`https://doctors-appointment-server-eta.vercel.app/api/doctors?name=${query}`)
                setDoctor(res.data.doctor)
                setIsLoading(false)
            } catch (error) {
                alert("something went wrong")
            }
            
        }
        fetchData()
    },[query])
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
    <div>
      <Navbar/>
      <div className='findWrapper'>
        <div className='findSearch'>
            <h2>Find a Doctor</h2>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input type="text" placeholder='search by doctor name' onChange={(e)=> setQuery(e.target.value)}/>
                <button type='button'>search</button>
            </form>
        </div>
        <div className='doctorsContainer2'>
            <div className='doctorsWrapper'>
                {isLoading && <div className='loadingContainer'>
                    <Loading/>
                </div>}
                {doctor.length === 0 && <h3>sorry <span style={{color: "#01B5C5"}}>{query}</span> not found</h3>}
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
      </div>
      <Footer/>
    </div>
  )
}

export default Find
