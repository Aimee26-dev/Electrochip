import plugs from "../assets/images/plug.png";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";
import s5 from "../assets/images/s5.png";
import "./Styles/services.css";

function Services() {
  return (
    <section>
      <h2>
        Our Services<img src={plugs} alt="" />
      </h2>

      <div className="services">

        <div className="service">
        <img src={s1} alt="" /> 

         <div className="detail">
          <h5>Equipment installation</h5>
          <p className="sercicesText">There are many variations of <br /> passages of Lorem Ipsum available,</p>
         </div>
        </div>

        <div className="service">
          <img src={s2} alt="" />

          <div className="detail">
          <h5 >Windmill Energy</h5>
          <p className="sercicesText">There are many variations of <br />passages of Lorem Ipsum available,</p>
          </div>
          
        </div>

        <div className="service">
          <img src={s3} alt="" />
          
          <div className="detail">
          <h5>Equipment Maintenance</h5>
          <p className="sercicesText">There are many variations of <br />passages of Lorem Ipsum available,</p>
          </div>
          
        </div>

      </div>

      <div className="services">

      <div className="service">
          <img src={s4} alt="" />
          <div className="detail">
          <h5>Offshore Engineering</h5>
          <p className="sercicesText">There are many variations of <br /> passages of Lorem Ipsum available,</p>
          </div>
          
        </div>

        <div className="service">
          <img src={s5} alt="" />
          <div className="detail">
          <h5>Electrical Wiring</h5>
          <p className="sercicesText">There are many variations of <br /> passages of Lorem Ipsum available,</p>
          </div>
        </div>
      
      </div>

      <button>Read More</button>

    </section>
  );
}
export default Services;
