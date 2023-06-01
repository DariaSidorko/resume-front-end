

import { useState, useEffect } from "react";
import { getResume, deleteTodo } from "../services/resumes-api";
import {useParams, useNavigate, Link} from 'react-router-dom';
import {getResumes, deleteResume} from '../services/resumes-api';


export default function Resume() {
    
    const show = true

  const nav = useNavigate() // setting up our return to main page
  const {id} = useParams() // destructuring the id parameter for use
  const [resume, setResume] = useState({}) // setting up our state
  useEffect(() => {
    getResume(id) //getting the one ToDo from the api using the id
    .then(res => setResume(res.data))}, [])


    const deleteTheResume = (e, id) => {
        e.preventDefault();
        deleteResume(id) // delete function goes here
        setTimeout(()=>{
            nav('/') // navigate back to the main screen
          }, 300)
     }

    //  const addToggle = () => {

    //  }

    //  const createTheSummaty = () => {

    //  }

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };

  return (
    <div> 
        <div class="resume-header">     
                    <h1 class="name">{ resume.name }</h1>
                    <h3 class="tagline">{ resume.title }</h3>
                    <div class="contact-list">
                        <p>{ resume.email }</p>
                        <p class="phone">{ resume.phone }</p>
                        <p class="website"><i></i><a onClick={() => openInNewTab(resume.website)}>{ resume.website }</a></p>
                        <p class="linkedin"><i></i><a onClick={() => openInNewTab(resume.linkeIn)}>Linked In</a></p>
                        <p class="github"><i ></i><a onClick={() => openInNewTab(resume.gitHub)}>GitHub</a></p>
                    </div>
        </div> 
        
        <Link className='edit-delete-button' to={`/${resume._id}/edit`}> Edit</Link>
        <Link className="edit-delete-button" onClick={(e) => deleteTheResume(e, resume._id)}>Delete</Link> 
        <div class="main-wrapper"> 
         {/* {
         resume.profileSummary ?
        <button onClick={addToggle()} className="hide">+ add profile summary</button> :
        <button onClick={addToggle()} >+ add profile summary</button>
         
         }
        <form onSubmit={createTheSummaty} class="account-details">
            <div ><label>Name</label>
            <input type="text" name="name" required/></div>
            <button type="submit" >Submit</button>
        </form>
            <section class="section experiences-section">
                <h2 class="section-title"><i ></i>Profile Summary</h2>
                    <div class="item">
                        <p>{ resume.profileSummary } </p>  
                    </div>
            </section>
             */}
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