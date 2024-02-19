
import './main.scss'

import Section1 from '../section1/Reviews'
import Section2 from '../section2/Vocal';
import Section3 from '../section3/Peek';
import Section4 from '../section4/Platform';
import Section5 from '../section5/Songs';
import Section6 from '../section6/Contribute';
import Section7 from '../section7/Together';
import Section8 from '../section8/OurPricing';
import Section9 from '../section9/TheTeam';
import Faq from '../section10/Faq';
import Music from '../section11/Music';
import Footer from '../../footer/Footer';
const Main = () => {
 
  return (
    <div className="mainWrapperContainer">
    <div className='mainWrapper'>
      <div className="groupImg">
        {/* <img src="./assets/groupImgMobile.png" alt="" className="mobileGroup" /> */}
        <img src="./assets/Group311.png" alt="" className='phoneGroup' />
      </div>
      <div className="section1">
        <Section1 />
      </div>
      <div className='section2'>
            <Section2 />
      </div>
      <div className="section3" data-aos='fade-up'>
        <Section3 />
      </div>
      <div className="section4">
        <Section4 />
      </div>
      <div className="section5">
        <Section5 />
      </div>
      <div >
        <Section6 />
      </div>
      <div className="section7">
        <Section7 />
      </div>
      <div className="section8">
        <Section8 />
      </div>
      <div className="section9">
        <Section9 />
      </div>
      <div className="section10">
        <Faq />
      </div>
      <div className="section11">
        <Music />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default Main;
