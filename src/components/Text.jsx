import picture from '../assets/images/slider-img.jpg'
import Button from './Button';
function Text(){
    return(
        <div className="electrochip">
                 <div className="titre">
                     <h2>ELECTRICAL <br />SERVICE <br /> PROVIDER</h2>
                     <p className="ecrit">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                     <p><Button title={"Contact Us"}/></p>
                </div>
                    <div className="picture">
                        <a href="#"><img  src={picture} alt="picture" /></a>
                    </div>
        </div>
    )
}

export default Text;