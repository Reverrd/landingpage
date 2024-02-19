import './footer.scss'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className="footerWrapper">
        <div className='footerLogo'>
        <img src="./assets/logo.png" alt="" />
         <p>&copy; 2023 VocalCentric.<br/>cloned by Promise</p>  
        </div>
        <div className='quicklinks'>
            <h4>Quick Links</h4>
            <p>About us</p>
            <p>How it works</p>
            <p>Songs</p>
            <p>Pricing</p>
            <p>FAQ</p>
        </div>
        <div className='quicklinks'>
            <h4>Accounts</h4>
            <p>Sign in</p>
            <p>Sign up</p>
        </div>
        <div className='quicklinks'>
           <h4>Follow</h4> 
           <p>Facebook</p>
           <p>Instagram</p>
           <p>X(twitter)</p>
           <p>Youtube</p>
        </div>
      </div>
    </div>
  )
}
