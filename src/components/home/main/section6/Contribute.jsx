import './section6.scss'

export default function Section6() {
  
  return (
    <>    <div className='section6'>
      <div className="section6Wrapper" data-aos='zoom-in-up'>
        <div className="section6Txt">
        <h1>Contribute to the community, add vocal part</h1>
        <p>Rehearse easily with VocalCentric from the comfort of your home, office or wherever you find yourself</p>
        </div>
        <div className="contributeFrame">
            <div className="contributeFrameWrapper">
            <div className="contributeMac">
                <img src="./assets/contributeFrame.png" alt="" />
            </div>
            <div className="contributeView">
                <img className='contView' src="./assets/Contview.png" alt="" />
            </div>
            </div>
        </div>
        <div className="contributebottom">
          <div className="getBetter">
            <h2>Get better, see<br/>performance in real time</h2>
            <div className="getbetterFrameContainer">
            <div className="getBetterFrame">
                <div className="getBetterMac">
                  <img src="./assets/contributeFrame.png" alt="" />  
                </div>  
                <div className="getBetterView">
                  <img src="./assets/getBetter.png" alt="" />
                </div>  
            </div>
            </div>       
          </div>
          <div className="virtual">
            <h3>Virtual rehearsals rich<br/> in physical experience</h3>
            <img src="./assets/virtual.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>

  )
}
