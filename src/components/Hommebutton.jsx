import Button from "./Button";

function Hommebutton(){
    return(
        <div className="nav">
                 <Button  title={"Home"}/>
                <Button  title={"About"}/>
                <Button  title={"Service"}/>
                <Button  title={"Blog"}/>
                <Button  title={"Contact"}/>
        </div>
    )
}

export default Hommebutton;