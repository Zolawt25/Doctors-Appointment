import { East } from '@mui/icons-material'

const Service = () => {
  return (
    <div className='serviceContainer'>
      <h2>Providing the best</h2>
      <h2 className='aaa'>medical services</h2>
      <p className='serviceP'>World-class care for evryone. Our health system offers</p>
      <p className='serviceP'>unmatched, expert health care.</p>
      <div className='serviceWrapper'>
        <div className='serviceIconContainer'>
            <div className='serviceImg'>
                <img src="/img/icon01.png" alt="icon01.png" className='serviceImgImg'/>
            </div>
            <h3>Find a Doctor</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='serviceIcon'>
                <East style={{fontSize: "15px", color: "#111"}}/>
            </div>
        </div>
        <div className='serviceIconContainer'>
            <div className='serviceImg'>
                <img src="/img/icon02.png" alt="icon02.png" className='serviceImgImg1'/>
            </div>
            <h3>Find a Location</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='serviceIcon'>
                <East style={{fontSize: "15px", color: "#111"}}/>
            </div>
        </div>
        <div className='serviceIconContainer'>
            <div className='serviceImg'>
                <img src="/img/icon03.png" alt="icon03.png" className='serviceImgImg1'/>
            </div>
            <h3>Book Appointment</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='serviceIcon'>
                <East style={{fontSize: "17px", color: "#111"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
