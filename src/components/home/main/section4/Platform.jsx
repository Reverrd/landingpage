import './section4.scss'

export default function Section4() {
  return (
    <div className='section4WrapperContainer'>
        <div className="section4Wrapper">
            <div className="section4Top">
                <div className="section4Left">
                    <div className="section4LeftList">
                    <h2>How The<br/> Platform Works</h2>
                    <h2 id='h2Mobile'>How The Platform Works</h2>
                    <p>VocalCentric aims to bridge the gap between small and large choir groups, fostering a supportive community and empowering VocalCentric </p>
                    </div>
                    <div className="getStarted" id='getStartedPlatform'>
                        <span>
                        Get Started
                        </span>
                        <span className='arrowButton'>
                        <img src="./assets/arrowButton.png" alt="" />
                        </span>
                    </div>
                    
                </div>
                <div className="section4Right">
                    <div className="section4RightList">
                    <div className="listMobileImage">
                            <img src="./assets/registration.png" alt="" />
                    </div>
                        <div className="listImage">
                            <img src="./assets/register-frame.png" alt="" />
                        </div>
                        <div className="listMobileTxt">
                            <h3>Registration</h3>
                            <p>VocalCentric aims to bridge the gap between small and large choir.</p>
                        </div>
                        <div className="listTxt">
                            <h3>Register</h3>
                            <p>VocalCentric aims to bridge the gap between small and large choir</p>
                        </div>
                    </div>
                    <div className="section4RightList">
                        <div className="listMobileImage">
                            <img src="./assets/learning.png" alt="" />
                        </div>
                        <div className="listImage">
                            <img src="./assets/rehearse-frame.png" alt="" />
                        </div>
                        <div className="listMobileTxt">
                            <h3>Learning</h3>
                            <p>VocalCentric aims to bridge the gap between small and large choir.</p>
                        </div>
                        <div className="listTxt">
                            <h3>Rehearse Song</h3>
                            <p>VocalCentric aims to bridge the gap between small and large choir</p>
                        </div>
                    </div>
                    <div className="section4RightList">
                    <div className="listMobileImage">
                            <img src="./assets/event.png" alt="" />
                        </div>
                        <div className="listImage">
                            <img src="./assets/join-frame.png" alt="" />
                        </div>
                        <div className="listMobileTxt">
                            <h3>Events</h3>
                            <p>VocalCentric aims to bridge the gap between small and large choir.</p>
                        </div>
                        <div className="listTxt">
                            <h3>Join choir groups and events</h3>
                            <p>VocalCentric aims to bridge the gap between small and large choir</p>
                        </div>
                    </div>
                </div>
                
                {/* <div className="circle"></div> 
             */}
             <div id='getStartedMobile' className="getStarted">
                        <span>
                        Get Started
                        </span>
                        <span className='arrowButton'>
                        <img src="./assets/arrowButton.png" alt="" />
                        </span>
                    </div>
            </div>
            
        </div>
      
    </div>
  )
}
