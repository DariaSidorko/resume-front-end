
import {getResumes, deleteResume} from '../services/resumes-api';
import{useState, useEffect} from 'react';
//import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"


export default function Resumes() {

  const nav = useNavigate()

  const [resumes, setResumes] = useState([])
    useEffect(() => {
        getResumes() // calling the function to get the data
        .then(res => setResumes(res.data)) // setting state with returned data
    }, [])

    const deleteTheResume = (e, id) => {
      e.preventDefault();
      deleteResume(id) // delete function goes here
       getResumes() // calling the function to get the data
        .then(res => setResumes(res.data)) // setting state with returned data

        nav('/') // navigate back to the main screen
    
   }


return(
  <div>
    <h1>All Resumes Page</h1>
  <div className='all-resumes-wrapper'>  
 {resumes.map((resume) =>{
  return (
    <div className='resumes-wrapper'> 
      <Link className='resumes-header' to={`/${resume._id}`}>{resume.name} Resume</Link> 
      <p> {resume.title}</p>
      <Link className='edit-delete-button' to={`/${resume._id}/edit`}> Edit</Link>
      <Link className="edit-delete-button" onClick={(e) => deleteTheResume(e, resume._id)}>Delete</Link> 
    </div>
  )
  }) 
}
</div>
</div>
)
}