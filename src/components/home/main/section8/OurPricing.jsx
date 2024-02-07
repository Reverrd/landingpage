import './section8.scss'
import useAOS from '../main/useAOS'
export default function Section8() {
  useAOS();
  return (
    <div className='section8'>
      <div className="section8Wrapper">
        <div className='head'>
        <h1>Our Pricing</h1>
        </div>
        <div className='listContainer'>
            <div className='list' data-aos='zoom-in'>
                
                <ul>
                    <li><h3>FREE</h3></li>
                    <li>Advertisement</li>
                    <li>Vocal Song Parts</li>
                    <li>Join choir</li>
                    <li>Virtual rehearsal</li>
                    <li>No Whitelisting</li>
                    <li>No Director note</li>
                </ul>
                <button>Get Started</button>
            </div>
            <div className='list'data-aos='zoom-in'>
                
                <ul>
                <li><h3>PRO</h3></li>
                    <li>Advertisement</li>
                    <li>Vocal Song Parts</li>
                    <li>Join choir</li>
                    <li>Virtual rehearsal</li>
                    <li>No Whitelisting</li>
                    <li>No Director note</li>
                </ul>
                <button>Get Started</button>
            </div>
            <div className='list'data-aos='zoom-in'>
                
                <ul>
                <li><h3>TEAM</h3></li>
                    <li>Advertisement</li>
                    <li>Vocal Song Parts</li>
                    <li>Join choir</li>
                    <li>Virtual rehearsal</li>
                    <li>No Whitelisting</li>
                    <li>No Director note</li>
                </ul>
                <button>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}
