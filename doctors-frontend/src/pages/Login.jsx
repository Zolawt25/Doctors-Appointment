import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import axios from "axios"

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const navigate = useNavigate()
    const cookie = new Cookies()



  const handleLogin = async ()=>{
    try {
        const res = await axios.post("http://localhost:3000/user/login", { email, password })
        cookie.set("user", res.data.token)
        navigate("/")
    } catch (error) {
        setEmailErr(error.response.data.email)
        setPasswordErr(error.response.data.password)
    }
    
  }

  return (
    <div className="loginContainer" >
        <Navbar/>
        <div className="loginRapper">
            <div className="loginForm">
                <h4>Hello! <span>Welcome</span> Back</h4>
                <form>
                    <input type="text" placeholder="enter email..." onChange={(e)=> setEmail(e.target.value)}/>
                    {emailErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{emailErr} </p>}
                    <input type="password" placeholder="enter password..." onChange={(e)=> setPassword(e.target.value)}/>
                    {passwordErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{passwordErr} </p>}
                    <button type='button' onClick={()=> handleLogin()}>Login</button>
                </form>
                <div className="loginFormAccount">
                    <p>Don't have an account?</p>
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
