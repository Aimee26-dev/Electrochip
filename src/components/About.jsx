import about1 from "../images/about-img1.jpg"
import about2 from "../images/about-img2.jpg"
function About(){
    return (
        <div className="contenair-about">
            <div className="description-about">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum esse reprehenderit iure a ipsam officiis laboriosam ipsa, doloremque eius numquam labore ex officia harum porro fugit dolorum! Dicta, incidunt ducimus.</p>
                <button>
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