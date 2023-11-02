import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"

const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState("")
  const [nameErr, setNameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const navigate = useNavigate()
  const cookie = new Cookies()

  const handleRegister = async ()=>{
    try {
      const res = await axios.post("http://localhost:3000/user/register", {username: name, email, password})
      cookie.set("user", res.data.token)
      navigate("/")
    } catch (error) {
      !name ? setNameErr(true) : setNameErr(false)
      !password ? setPasswordErr(true) : setPasswordErr(false)
      email ? setEmailErr(error.response.data.email) : setEmailErr("you must provide email")
    }
  }
  return (
    <div className="registerContainer">
      <Navbar/>
      <div className="loginRapper">
        <div className="registerRapperContainer">
            <div className="registerLeft">
                <img src="/public/img/signup.gif" alt="signup.gif" />
            </div>
            <div className="registerRight">
                <h4>Create an <span>Account</span></h4>
                <form>
                    <input type="text" placeholder="enter your name..." onChange={(e)=>setname(e.target.value)}/>
                    {nameErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}> you must provide name</p>}
                    <input type="text" placeholder="enter email..." onChange={(e)=>setEmail(e.target.value)}/>
                    {emailErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{emailErr} </p>}
                    <input type="password" placeholder="enter password..." onChange={(e)=>setPassword(e.target.value)}/>
                    {passwordErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}> you must provide password</p>}
                    <button type='button' onClick={handleRegister}>Register</button>
                    <div className="loginFormAccount">
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
