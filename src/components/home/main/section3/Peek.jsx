
import useAOS from '../main/useAOS'
import './section3.scss'

export default function Section3() {
  useAOS();
  
  return (
    <div className="section3WrapperContainer">
    <div className='section3Wrapper'>
      <h2>Take a Peek</h2>
      <p>We are not just a random music listing website. VocalCentric allows you to cultivate your musical vocal skills and nurture it to flame. There are varieties of vocals to listen to and rehearse. Choir groups you can join and events are available to further sharpen you skills</p>
      <div className="macMockView" data-aos='flip-right'>
        <div className='mac-view1-container'>
              <div className='mac-view oneview'>
              <img src='./assets/MacBook-Pro-view.png' alt='macbook1'/>
              </div>
              <div className='mac mac1'>
                <img   src='./assets/main-mac.png' alt='main-mac'/>
              </div>
        </div>
        <div className='mac-view2-container'>
              <div className='twoview' >
              <img src='./assets/ipad-view.png' alt='ipad'/>
              </div>
              <div className='mac pad'>
              <img  src='./assets/main-pad.png' alt='ipad'/>
              </div>
        </div>
        <div className='mac-view3-container'>
              <div className='mac-view threeview'>
            <img  src='./assets/MacBook-Pro-Space.png' alt='ipad'/>
            </div>
            <div className='mac mac3'>
            <img  src='./assets/main-mac2.png' alt='ipad'/>
            </div>
        </div> 
      </div>
    </div>
    </div>
  )
}
