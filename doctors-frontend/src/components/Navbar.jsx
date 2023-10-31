import { useState } from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const changBackground = ()=>{
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
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
            <a href="/login">Log in</a>
        </div>
        </div>
    )
}

export default Navbar
