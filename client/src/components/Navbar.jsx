import jwtDecode from 'jwt-decode'
import { useState } from 'react'
import Cookies from 'universal-cookie'
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [responsiveBar, setResponsiveBar] = useState(false)
    const cookie = new Cookies()
    const token = cookie.get("user") 
    const decode = token ? jwtDecode(token) : ""
    const username = token && decode.name.slice(0,2)
    
    const changBackground = ()=>{
        if(window.scrollY >= 40){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    const handleLogout = async()=>{
        cookie.remove("user")
        window.location.reload()
    }
    window.addEventListener("scroll", changBackground)
    return (
        <div className={navbar? "nav-container active" : "nav-container"}>
        <a href='/' className='nav-left'>
            <img src="/img/logo.png" alt="logo" />
        </a>
        <div className='nav-center' style={{right: `${responsiveBar ? "0px" : "-3000px"}`}}>
            <a href="/">Home</a>
            <a href="/services">Service</a>
            <a href="/find">Find a doctor</a>
            <a href="/contact">Contact</a>
            <span onClick={()=>setResponsiveBar(false)}><Close/></span>
        </div>
        <div className='nav-right'>
            {
                token ? <div className='navUserContainer'>
                    <div>{username}</div> <button onClick={()=> handleLogout()}>Logout</button>
                </div> 
                :
                <a href="/login">Log in</a>
            }
            <span onClick={()=>setResponsiveBar(true)}><MenuIcon/></span>
        </div>
        </div>
    )
}

export default Navbar
