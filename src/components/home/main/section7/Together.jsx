import './section7.scss'
import useAOS from '../main/useAOS'
export default function Section7() {
  useAOS()
  return (
    <>
      <div className="section7">
        <div className="section7Wrapper">
            <h1>Bring your team together</h1>
            <img data-aos='zoom-in' src="./assets/togetherframe.png" alt="" />
            <div className="circle" id='circleMobile'></div>
        </div>
      </div>
    </>
  )
}
