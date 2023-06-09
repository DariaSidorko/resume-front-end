
import { useNavigate } from "react-router-dom"
import {createResume} from '../services/resumes-api'

export default function Create() {

  const nav = useNavigate()

  const createTheResume = (e) => {
    e.preventDefault();
    console.log(e.target)
      const resume = {
        name: e.target.name.value, 
        title: e.target.title.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        website: e.target.website.value,
        linkedIn: e.target.linkedIn.value,
        gitHub: e.target.gitHub.value,
      }
      createResume(resume).then(() => nav('/'))   
  }


  // const toggleShow = (e) => {

  // }

  return (

    <div>
    <div class="main-block">
    <h1>Create Resume</h1>
    <div className="about" >
      
        <h3>About</h3>
        <form onSubmit={createTheResume} class="account-details">
        {/* <input type='text' name='description' id='dsc'/> */}
          <div ><label>Name</label>
            <input type="text" name="name" required/></div>
          <div><label>Title</label>
            <input type="text" name="title" /></div>
          <div><label>Email</label>
            <input type="text" name="email" /></div>
          <div><label>Phone</label>
            <input type="text" name="phone" /></div>
          <div><label>Website</label>
            <input type="text" name="website" /></div>
          <div><label>Linked In</label>
            <input type="text" name="linkedIn" /></div>
          <div><label>Git Hub</label>
            <input type="text" name="gitHub" /></div>
            <button type="submit" >Submit</button>
        </form>
      </div>
      {/* href="/" */}
      {/* <button onClick={toggleShow}>Add Profile Summary </button>
      <div className="profile-summary">
        <div>
          <h3>Profile Summary</h3> 
          
        </div>
        <div  class="personal-details">
          <div>
            <input type="text" name="profileSummary" /></div>
          </div>
      </div> */}


      {/* <fieldset>
        <legend>
          <h3>Personal Details</h3>
        </legend>
        <div  class="personal-details">
          <div>
            <input type="password" name="profileSummary" /></div>
            <div><label>Repeat password*</label>
            <div><label>Name*</label><input type="text" name="name" required/></div>
            <div><label>Phone*</label><input type="text" name="name" required/></div>
            <div><label>Street</label><input type="text" name="name"/></div>
            <div><label>City*</label><input type="text" name="name" required/></div>
            <div>
              <label>Country*</label>  
              <select>
                <option value=""></option>
                <option value="Armenia">Armenia</option>
                <option value="Russia">Russia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div><label>Website</label><input type="text" name="name"/></div>
          </div>
          <div>
            <div>
              <label>Gender*</label>
              <div class="gender">
                <input type="radio" value="none" id="male" name="gender" required/>
                <label for="male" class="radio">Male</label>
                <input type="radio" value="none" id="female" name="gender" required/>
                <label for="female" class="radio">Female</label>
              </div>
            </div>
            <div class="birthdate">
              <label>Birthdate*</label>
              <div class="bdate-block">
                <select class="mounth" required>
                  <option value=""></option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <input type="text" name="name" required/>
              </div>
            </div>
            <div>
              <label>Nationality*</label>              
              <select required>
                <option value=""></option>
                <option value="Armenian">Armenian</option>
                <option value="Russian">Russian</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="American">American</option>
                <option value="English">English</option>
              </select>
            </div>
            <div>
              <label>Children*</label>
              <div class="children"><input type="checkbox" name="name" required/></div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>
          <h3>Terms and Mailing</h3>
        </legend>
        <div  class="terms-mailing">
          <div class="checkbox">
            <input type="checkbox" name="checkbox"/><span>I accept the <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs.</a></span>
          </div>
          <div class="checkbox">
            <input type="checkbox" name="checkbox"/><span>I want to recelve personallzed offers by your site</span>
          </div>
          </div>
      </fieldset> */}
      {/* <button type="submit" href="/">Submit</button> */}

    </div> 
  </div>
  )
}