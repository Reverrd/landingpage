import './home.scss'
import Hero from '../hero/Hero'
import Main from '../main/main/Main'
const Home = () => {
  return (
    <div className='home'>
        <div className="homeWrapper">
            <Hero />
        </div>
        <div className='main'>
            <Main/>
        </div>
      
    </div>
  )
}

export default Home
