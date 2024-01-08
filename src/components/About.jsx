import about1 from "../images/about-img1.jpg"
import about2 from "../images/about-img2.jpg"
import plug from "../images/plug.png"
function About(){
    return (
        <div className="contenair-about">
            <div className="description-about">
                <div className="title-about">
                    <h1>About Us</h1>
                    <img className="logo-about" src={plug} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                </div>
                <button className="button-about">
                    Read More
                </button>

            </div>
            <div className="image-about">
                <div className="about-image-fist">
                    <img  src={about1} alt="" />
                </div>
                <div className="about-image-second">
                    <img  src={about2} alt="" />
                </div>
            </div>
        </div>
    )
}
export default About;