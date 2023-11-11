import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Service from '../components/Service'
import Features from '../components/Features'
import Medical from '../components/Medical'
import Vertual from '../components/Vertual'
import Doctors from '../components/Doctors'
import Questions from '../components/Questions'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Service/>
      <Features/>
      <Medical/>
      <Vertual/>
      <Doctors/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default Home
