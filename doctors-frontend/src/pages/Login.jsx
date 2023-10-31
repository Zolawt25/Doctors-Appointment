import Navbar from "../components/Navbar"

const Login = () => {
  return (
    <div className="loginContainer" >
        <Navbar/>
        <div className="loginRapper">
            <div className="loginForm">
                <h4>Hello! <span>Welcome</span> Back</h4>
                <form>
                    <input type="text" placeholder="enter email..."/>
                    <input type="password" placeholder="enter password..."/>
                    <button type='button'>Login</button>
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
