

// All of our endpoints
import axios from 'axios'
const baseURL = 'http://localhost:3001/resume';

// Show all
export const getResumes = () => {
  const URL = baseURL // our base url
  const response = axios.get(URL) 
  console.log(response)
  return response
}
// Show one
export const getResume = (id) => {
  const URL = `${baseURL}/${id}`
  const response = axios.get(URL)
  return response
}
// Edit the Todo
export const editResume = (id, updatedResume) => {
const URL = `${baseURL}/${id}`
const response = axios.put(URL, updatedResume)
return response;
}
// Create the Todo
export const createResume = (resume) => {
  const URL = `${baseURL}`
  console.log(resume)
  const response = axios.post(URL, resume)
  return response;
}
// Delete the Todo
export const deleteResume = (id) => {
  const URL = `${baseURL}/${id}`
  const response = axios.delete(URL)
  return response
}