import React ,{Component} from "react";
import "./home.css";
import Me from "../../asset/myfoto.jpg"
import ScrollDowm from "./ScrollDown";
import HeaderSocial from "./HeaderSocial";

class Home extends Component{
    render(){
    return(
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img" />
                <h1 className="home_name">Rivaldo Gabriel</h1>
                <span className=""home_education>I'm A Student</span>
                
               <HeaderSocial />

               <a href="#contact" className="btn">Hire Me</a>

               <ScrollDowm />

            </div>
        </section>
        
        
    )  
    }     
}

export default Home