import React,{Component} from "react";
import "./education.css";

class Education extends Component {
    render(){
    return(
        <section className="education container section" id='about'>
        <h2 className="section_tittle">Education</h2>

        <div className="education_container grid">

            <div className="education_data grid">
                <div className="education_info">
                    <p className="education_description">

                    <h1>SMA Negeri 1 Silaen</h1>
                        <h4>Ilmu Pengetahuan Alam</h4>
                        <h5>(2016 - 2018)</h5>
                        <br />
                        <br />
                        <h1>Esa Unggul University</h1>
                        <h3>Teknik Informatika</h3>
                        <h4>(2019 - Present)</h4>
                        <p>Saya Mahasiswa Semester 7 </p>
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

export default Education