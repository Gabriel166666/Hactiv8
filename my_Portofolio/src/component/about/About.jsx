import React,{Component} from "react";
import "./about.css";
import Imgae from "../../asset/myfoto.jpg"

class About extends Component {
    render(){
    return(
        <section className="about container section" id='about'>
            <h2 className="section_tittle">About Me</h2>

            <div className="about_container grid">
                <img src={Imgae} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description"> Hi, I'm Rivaldo Gabriel Sidabutar,I am a 6th semester Esa Unggul University as a Informatics Engineering,I have also attended the MSIB program on an independent campus as a QA for 4 months at PT. MAKRA CREATIONS 
                            PARSADA . i have an interest in testing and want to contribute to a career in software Tetsting Engineering..</p>

                        <a href=" " className="btn">Download CV</a>
                    </div>
                    
                    <div className="about_skill grid">
                     <div className="skills_data">
                        <div className="skills_tittle">
                            <h3 className="skills_number qa "> Quality Assurance</h3>
                        </div>
                        <div className="skills_bar">
                            <span className="skill_percentage">80%</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <div className="skills_tittle">
                            <h3 className="skills_number wd"> Web Development</h3>
                        </div>
                        <div className="skills_bar">
                            <span className="skill_percentage">75%</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <div className="skills_tittle">
                            <h3 className="skills_number ui"> UI/IX Design</h3>
                        </div>
                        <div className="skills_bar">
                            <span className="skill_percentage">50%</span>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    )
    }
}

export default About