import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"

const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const cookie = new Cookies()

  const handleRegister = async ()=>{
    try {
      const res = await axios.post("http://localhost:3000/user/register", {username: name, email, password})
      cookie.set("user", res.data.token)
      navigate("/")
    } catch (error) {
      console.log(error)
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
                    <input type="text" placeholder="enter email..." onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="enter password..." onChange={(e)=>setPassword(e.target.value)}/>
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
