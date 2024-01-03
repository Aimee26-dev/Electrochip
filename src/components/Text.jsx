import picture from '../assets/images/slider-img.jpg'
import Button from './Button';
function Text(){
    return(
        <section className="electrochip">
                 <div className="text">
                     <h2>ELECTRICAL</h2>
                    <h2>SERVICE</h2>
                     <h2>PROVIDERS</h2>
                </div>
                    <div className="ecrit">
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>
                 <div>
                     <a href="#"><img src={picture} alt="picture" /></a>
                </div>
             <div>
                <p><Button title={"Contact Us"}/></p>
            </div>
        </section>
    )
}

export default Text;