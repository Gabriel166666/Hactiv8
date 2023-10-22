import React,{Component} from "react";
import "./sidebar.css";


class Sidebar extends Component {
    render(){

     return(
        <aside className="aside">
            <a href="#home" className="nav_logo">
            </a>

            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#Home" className="nav_link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#About" className="nav_link">
                            <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#Experience" className="nav_link">
                            <i className="icon-briefcase"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#Education" className="nav_link">
                            <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#Skill" className="nav_link">
                            <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#Interest" className="nav_link">
                            <i className="icon-note"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="Award" className="nav_link">
                            <i className="icon-trophy"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
             <div className="nav_footer">
                <span className="copyright"> &copy; 2022 - 2023 .</span>
             </div>
        </aside>
    
    )
     }  
}



export default Sidebar