import React,{Component} from "react";
import "./interest.css";

class Interest extends Component {
    render(){
    return(
        <section className="education container section" id='about'>
        <h2 className="section_tittle">Interest</h2>

        <div className="education_container grid">

            <div className="education_data grid">
                <div className="education_info">
                    <p className="education_description">

                    <h1>1. Testing (Quality Assurance) </h1>
                        <p>Saya memiliki ketertarikan dibidang Testing sejak bergabung MSIB-3 di Alterra academy, :)</p>
                        <br />
                        <br />
                        <h1>2. Web Development </h1>
                        <p> Ketertarikan saya dibidang web development juga lumayan ada, menurut saya web itu sangat menarik saat melakukan pegeditan di bagian tampilannya (UI), kelihatan seru</p>
                        <h5>GPA : 3.45</h5>
                        <br />
                        <br />


                    </p>
                    
                </div>
            

                </div>
            </div>
    </section>
    )
  }
}

export default Interest