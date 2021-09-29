import './skills.css';

import React from 'react'

export default function Skills({menusOpen, setMenusOpen, skillsOpen, setSkillsOpen}) {
    
    return (
        <div className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
    
        <div className="skills_container container grid">
            <div>
                {/* <!--==================== SKILLS 1====================--> */}
                <div className={"skills_content " + (menusOpen && "skills_close")}>
                    <div className="skills_header" onClick={()=>setMenusOpen(!menusOpen)}>
                        <i className="uil uil-brackets-curly skills_icon"></i>
    
                        <div>
                            <h1 className="skills_titles">Frontend Developer</h1>
                            <span className="skills_subtitle">More than 10 projects</span>
                        </div>
    
                        <i className="uil uil-angle-down skills_arrow"></i>
                    </div>
    
                    <div className="skills_list grid">
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">HTML</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_html"></span>
                            </div>
                        </div>
    
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">CSS</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_css"></span>
                            </div>
                        </div>
    
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_javascript"></span>
                            </div>
                        </div>
    
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">React</h3>
                                <span className="skills_number">85%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_react"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
                         {/* <!--==================== SKILLS 2====================--> */}
                         <div className={"skills_content " + (skillsOpen && "skills_close")}>
                    <div className="skills_header" onClick={()=>setSkillsOpen(!skillsOpen)}>
                        <i className="uil uil-server-network skills_icon"></i>
    
                        <div>
                            <h1 className="skills_titles">Backend Developer</h1>
                            <span className="skills_subtitle">More than 5 projects</span>
                        </div>
    
                        <i className="uil uil-angle-down skills_arrow"></i>
                    </div>
    
                    <div className="skills_list grid">
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Node.js</h3>
                                <span className="skills_number">60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_php"></span>
                            </div>
                        </div>
    
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Express.js</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_node"></span>
                            </div>
                        </div>
    
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">MongoDB</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_firebase"></span>
                            </div>
                        </div>
    
                        <div className="skill_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">REST APIs</h3>
                                <span className="skills_number">85%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skill_percentage skills_python"></span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>



    )
}

