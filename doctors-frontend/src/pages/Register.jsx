import Navbar from "../components/Navbar"

const Register = () => {
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
                    <input type="text" placeholder="enter your name..."/>
                    <input type="text" placeholder="enter email..."/>
                    <input type="password" placeholder="enter password..."/>
                    <button type='button'>Register</button>
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
