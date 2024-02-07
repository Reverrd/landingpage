import './hero.scss'
import Nav from './nav/Nav'
import HeroTxt from './herotxt/HeroTxt'
const Hero = () => {
  return (
    <div className='heroSection' >
      <div className="heroSectionWrapper">
        <nav>
            <Nav/>
        </nav>
        <div className="heroTxt">
            <HeroTxt />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
