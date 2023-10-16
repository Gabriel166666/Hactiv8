import React from "react";
import "./experience.css";
import Imgae from "../../asset/motobatt2.jpeg"
import alta from "../../asset/alterra.jpeg"
const Experience = () => {
    return(
        <section className="experience container section" id='about'>
            <h2 className="section_tittle">My Experience</h2>

            <div className="experience_container grid">
                

                <div className="experience_data grid">
                    <div className="experience_info">
                        <img src={Imgae} alt="" className="experience_img" />
                        <h1 className="experience_description">1. PT.MOTOBATT INDONESIA</h1>
                        <h5>Head Of WareHouse Specialist</h5>
                        <p>Routine briefing with warehouse staff <br />
• Input in and out of goods <br />
• Deliver goods throughout by expedition <br />
• Counting sales <br />
• Control driver performance <br />
• Sales chart upgrade <br />
• Routine warehouse arrangement/ 6 months <br />
• Inventory taking <br />
• Handle routine work evaluation <br />
• Ensuring the goods are worth to sale <br />
• Control warehouse staff performance <br />
• Make daily,monthly,yearly stock report</p>
                            

                    </div>

                    <div className="experience_info">
                        <img src={alta} alt="" className="exp_img" />
                        <h1 className="experience_description">2. PT.Makra Kreasi Parsada</h1>
                        <h5>Quality Assurance Engineer</h5>
                        <p>Perform manual tests and automationTesting <br />
• Testing the Workfit application,<br />
is the final project result of the final project <br />
• Create Test Cases, Test plans <br />
• Manage Team project with Trello <br />
• Make daily Bug Report</p>
                            

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Experience