import './section5.scss'
import useAOS from '../main/useAOS'
export default function Section5() {
  useAOS();
  return (
    <div className='section5'>
      <div className="section5Wrapper" >
       <div className='songContainer'>
          <h1 className='songs'>SONGS</h1>
      </div>
      <div className='songsFrame' data-aos='zoom-in'>
        <img src='./assets/songframe.png' alt='songframe'/>
      </div>
      </div>
    </div>
  )
}
