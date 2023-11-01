import jwtDecode from 'jwt-decode'
import { useState } from 'react'
import Cookies from 'universal-cookie'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const cookie = new Cookies()
    const token = cookie.get("user") 
    const decode = token ? jwtDecode(token) : ""
    const username = token && decode.name.slice(0,2)
    
    const changBackground = ()=>{
        if(window.scrollY >= 80){
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
        <div className='nav-left'>
            <img src="/img/logo.png" alt="logo" />
        </div>
        <div className='nav-center'>
            <a href="/">Home</a>
            <a href="/services">Service</a>
            <a href="/find">Find a doctor</a>
            <a href="/">Contact</a>
        </div>
        <div className='nav-right'>
            {
                token ? <div className='navUserContainer'>
                    <div>{username}</div> <button onClick={()=> handleLogout()}>Logout</button>
                </div> 
                :
                <a href="/login">Log in</a>
            }
        </div>
        </div>
    )
}

export default Navbar
