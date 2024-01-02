import plugs from '../assets/images/plug.png'
import s1 from '../assets/images/s1.png'
import s2 from '../assets/images/s2.png'
import s3 from '../assets/images/s3.png'
import s4 from '../assets/images/s4.png'
import s5 from '../assets/images/s5.png'


function Services() {
 return(
    <section>
      <h2>Our Services <img src={plugs} alt="" /> </h2>
      <div>
         <div><img src={s1} alt="" /> <h5>Equipment installation</h5>
         <p>There are many variations of passages of Lorem Ipsum available,</p>
         </div>

         <div><img src={s2} alt="" />
         <h5>Windmill Energy</h5>
         <p>There are many variations of passages of Lorem Ipsum available,</p>
         </div>

         <div> <img src={s3} alt="" />
 <h5>Equipment Maintenance</h5>
 <p>There are many variations of passages of Lorem Ipsum available,</p>
         </div>
<div><img src={s4} alt="" />
<h5>Offshore Engineering</h5>
<p>There are many variations of passages of Lorem Ipsum available,</p>
</div>

<div> <img src={s5} alt="" />
<h5>Electrical Wiring</h5>
<p>There are many variations of passages of Lorem Ipsum available,</p>
</div>
<button>Read More</button>

      </div>
    </section>
 )   
}
export default Services