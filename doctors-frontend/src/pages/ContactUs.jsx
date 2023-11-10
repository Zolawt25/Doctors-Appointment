import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ContactUs = () => {
  return (
    <div className="contactContainer">
        <Navbar/>
        <div className="contactWrapper">
            <h2>Contact Us</h2>
            <p>Doctors appointment support team is always ready to answer your questions and provide all the necessary assistance.</p>
            <p>If you found any bugs or have security-related questions, please get in touch with our team at <b>zelalemt538@gmail.com</b></p>
            <p>you can email your questions, suggestions, and comments at <b>zelalemt538@gmail.com</b></p>
            <p><b>Address: </b>Addis Abeba/ Ethiopia</p>
            <p><b>Email: </b>zelalemt538@gmail.com</p>
            <p><b>Phone: </b>+251-909242510</p>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs
