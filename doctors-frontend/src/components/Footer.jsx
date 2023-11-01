import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerLogo'>
        <img src="/img/logo.png" alt="logo.png" />
        <p>Copyright 2023 developed by Zelalem Tesfa</p>
        <div className='footerIcons'>
            <span><YouTube style={{fontSize: "14px", color: "#222"}}/></span>
            <span><GitHub style={{fontSize: "14px", color: "#222"}}/></span>
            <span><Instagram style={{fontSize: "14px", color: "#222"}}/></span>
            <span><LinkedIn style={{fontSize: "14px", color: "#222"}}/></span>
        </div>
      </div>
      <div className='footerLinks'>
        <h4>Quick links</h4>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Service</a>
        <a href="/">Blog</a>
      </div>
      <div className='footerLinks'>
        <h4>I want to:</h4>
        <a href="/">Find a Doctor</a>
        <a href="/">Request an Appointment</a>
        <a href="/">Find a Location</a>
        <a href="/">Get a Opinion</a>
      </div>
      <div className='footerLinks'>
        <h4>Support</h4>
        <a href="/">Donate</a>
        <a href="/">Contact Us</a>
      </div>
    </div>
  )
}

export default Footer
