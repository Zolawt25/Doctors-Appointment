const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='headerLeft'>
        <h1>We help patients live a healthy, longer life.</h1>
        <p className='headerDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur eum voluptatibus ipsam dignissimos fugiat rerum possimus quasi recusandae deserunt, accusamus rem.</p>
        <a href="/find">Request an Appointment</a>
        <div className='headerExperience'>
          <div className='headerExperienceContainer'>
            <div className='headerExperienceSubContainer'>
              <p>30+</p>
              <div className='headerUnderline1'></div>
            </div>
            <span>Years of Experience</span>
          </div>
          <div className='headerExperienceContainer'>
            <div className='headerExperienceSubContainer'>
              <p>15+</p>
              <div className='headerUnderline2'></div>
            </div>
            <span>Clinic Locations</span>
          </div>
          <div className='headerExperienceContainer'>
            <div className='headerExperienceSubContainer'>
              <p>100%</p>
              <div className='headerUnderline3'></div>
            </div>
            <span>Petient Satisfaction</span>
          </div>
        </div>
      </div>
      <div className='headerRight'>
        <div className='headerImgContaLeft'>
          <img src="/img/hero-img01.png" alt="hero-img01" />
        </div>
        <div className='headerImgContaRight'>
          <img src="/img/hero-img02.png" alt="hero-img02" />
          <img src="/img/hero-img03.png" alt="hero-img03" />
        </div>
      </div>
    </div>
  )
}

export default Header
