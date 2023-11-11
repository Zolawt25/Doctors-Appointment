import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Medical from '../components/Medical'

const ServicesPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='servicesPageCont'>
        <Medical/>
      </div>
      <Footer/>
    </div>
  )
}

export default ServicesPage
