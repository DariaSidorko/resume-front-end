
//import data from '../data'
import { useState, useEffect } from "react";
import { getResume, deleteTodo } from "../services/resumes-api";
import {useParams, useNavigate} from 'react-router-dom'

export default function Resume() {

  const nav = useNavigate() // setting up our return to main page
  const {id} = useParams() // destructuring the id parameter for use
  const [resume, setResume] = useState({}) // setting up our state
  useEffect(() => {
    getResume(id) //getting the one ToDo from the api using the id
    .then(res => setResume(res.data))}, [])

  return (
    <div> 
        <div class="resume-header">     
                    <h1 class="name">{ resume.name }</h1>
                    <h3 class="tagline">{ resume.title }</h3>
                    <div class="contact-list">
                        <p><i class="fa fa-envelope"></i><a href={ resume.email }>{ resume.email }</a></p>
                        <p class="phone"><i class="fa fa-phone"></i><a href={ resume.phone }>{ resume.phone }</a></p>
                        <p class="website"><i class="fa fa-globe"></i><a href="http://www.dariasidorko.com/" target="_blank">{ resume.website }</a></p>
                        <p class="linkedin"><i class="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/dariasidorko" target="_blank">{ resume.linkedIn }</a></p>
                        <p class="github"><i class="fa fa-github"></i><a href="https://github.com/DariaSidorko" target="_blank">{ resume.gitHub }</a></p>
                    </div>
        </div> 
        
        <div class="main-wrapper"> 

        {/* <section class="section experiences-section">
                <h2 class="section-title"><i ></i>Profile Summary</h2>
              
                    <div class="item">
                        <p>{ resume.profileSummary } </p>  
                    </div>
            </section> */}
            
            {/* <!--*****  education section  *****--> */}
            {/* <section class="section education-section">
                <h2 class="section-title"><i ></i>Education</h2>

                    <div class="item">
                            <div class="upper-row">
                                <h3 class="degree">{ resume.education[0].degree } </h3>
                                <div class="school-name">{ resume.education[0].school }, { resume.education[0].location }</div>
                            </div>
                            <div class="time">{ resume.education[0].dateStart } - { resume.education[0].dateEnd }</div>
                            <div class="details">
                                <p><i>{ resume.education[0].comments } </i></p>  
                            </div>
                    </div>    
            </section> */}
            
            {/* <!--*****  skill section  *****--> */}
            {/* <section class="skills-section section">
                <h2 class="section-title"><i ></i>Technical Skills</h2>
                <div class="skillset">        
                    <div class="item">
                        <span class="skills">{ resume.skills[0] ? resume.skills[0] : '' }</span>                              
                    </div>
                    
                </div>
            </section> */}
             
            {/* <!--*****  experience section  *****--> */}
            {/* <section class="section experiences-section">
                <h2 class="section-title"><i ></i>Work Experiences</h2>
              
                    <div class="item">
                        <div class="upper-row">
                            <h3 class="job-title">{ resume.experience[0].title ? resume.experience[0].title : ''}</h3>
                            <div class="company">{ resume.experience[0].companyName ? resume.experience[0].companyName : ''}  |  { resume.experience[0].location ? resume.experience[0].location : ''} </div>
                        </div>
                        <div class="time">{ resume.experience[0].dateStart ? resume.experience[0].dateStart : '' } - { resume.experience[0].dateEnd ? resume.experience[0].dateEnd : '' } </div>
                        <p>{ resume.experience[0].details[0] ? resume.experience[0].details[0] : '' } </p>  
                    </div>
            </section> */}
            
        </div>
    </div>
  )
}



            {/* <!--*****  projects section  *****--> */}
            {/* <!--<section class="section projects-section">
                <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>
                <div class="item">
                    <span class="project-title"><p><b>SEARS SHOPPING APPLICATION </b> <i>(Sears Hackathon)</i></p></span><span class="project-tagline">Target Area: Mobile &amp; Social Commerce. </br>After analyzing customer shopping process in Sears, as UX lead in the team I
designed an in-store shopping application which.</br><b>Skills applied:</b> Interaction Design, Information Architecture, Whiteboarding, Sketching, Prototyping, User Testing.</span>    
                </div> --> <!--item-->
            </section><!--section-projects--> */}