import { East } from '@mui/icons-material'

const Medical = () => {
  return (
    <div className='medicalConatainer'>
      <h2>Our medical services</h2>
      <p className='serviceP'>World-class care for evryone. Our health system offers</p>
      <p className='serviceP'>unmatched, expert health care.</p>
      <div className='medicalWrapper'>
      <div className='medicalDescWrapper'>
            <h3>Cancer Care</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='medicalIconWrapper'>
                <div className='medicalIcon'><East style={{fontSize: "17px", color: "#111"}}/></div>
                <div className='medicalIconNumber1'>1</div>
            </div>
        </div>
        <div className='medicalDescWrapper'>
            <h3>Labor & Delivery</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='medicalIconWrapper'>
                <div className='medicalIcon'><East style={{fontSize: "17px", color: "#111"}}/></div>
                <div className='medicalIconNumber2'>2</div>
            </div>
        </div>
        <div className='medicalDescWrapper'>
            <h3>Heart & Vascular</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='medicalIconWrapper'>
                <div className='medicalIcon'><East style={{fontSize: "17px", color: "#111"}}/></div>
                <div className='medicalIconNumber3'>3</div>
            </div>
        </div>
        <div className='medicalDescWrapper'>
            <h3>Mental Health</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='medicalIconWrapper'>
                <div className='medicalIcon'><East style={{fontSize: "17px", color: "#111"}}/></div>
                <div className='medicalIconNumber3'>4</div>
            </div>
        </div>
        <div className='medicalDescWrapper'>
            <h3>Neurology</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='medicalIconWrapper'>
                <div className='medicalIcon'><East style={{fontSize: "17px", color: "#111"}}/></div>
                <div className='medicalIconNumber1'>5</div>
            </div>
        </div>
        <div className='medicalDescWrapper'>
            <h3>Burn Treatment</h3>
            <p>World-class care for evryone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>
            <div className='medicalIconWrapper'>
                <div className='medicalIcon'><East style={{fontSize: "17px", color: "#111"}}/></div>
                <div className='medicalIconNumber2'>6</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Medical
