import bl1 from "../images/blog1.jpg";
import bl2 from "../images/blog2.jpg";
import plug from "../images/plug.png";

function SectionTree(){
return(
<section className="SectionTree">
<h1 className="title">Blog
<span><img  className="imgBlog" src={plug} alt="" /></span>
</h1>
<div className="blogs">
    <div  className="blog1">
<img src={bl1} alt="" className="image1" /> 
<h2  className="titleDescription">Blog Title Goes Here</h2>
<p className="Description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
    in some form, by injected humour, or randomised </p>
    </div>
    <div  className="blog1">
<img src={bl2} alt="" className="image2"/>
<h2 className="titleDescription">Blog Title Goes Here </h2>
<p className="Description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
    in some form, by injected humour, or randomised </p>
    </div>
</div>
</section>
)

}
export default SectionTree;