import logo from '../assets/images/logo.png'

function Logo(){
    return(
        <div className="logo">
             <a href="#"><img src={logo} alt="image logo" /></a>
             <a href="#">Electrochip</a>
        </div>
    )
}

export default Logo;