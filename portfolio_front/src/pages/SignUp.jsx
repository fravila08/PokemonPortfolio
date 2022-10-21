import axios from 'axios'
import {motion} from "framer-motion"

function SignUp() {
  function signUp(event) {
    event.preventDefault()
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let jobTitle = document.getElementById('jobTitle').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    axios.post('/sign_up', {
      firstName: firstName,
      lastName: lastName,
      jobTitle: jobTitle,
      email: email,
      password: password
    }).then((response) => {
      document.location.href = '#/signin'
      console.log('response from server: ', response.data.message)
    })
  }


  
  return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        style={{display:"flex", justifyContent:"center", marginTop:"20vh", paddingBottom:"10vh"}}>
        <div className="signup">
          <form onSubmit={signUp}>
            <label htmlFor="firstName">First Name </label>
            <input id='firstName'
              placeholder='ex: pacho'
              className="form-control"
              required />
            <br />
            <label htmlFor="lastName">Last Name </label>
            <input id='lastName'
              placeholder='ex: villa'
              className="form-control"
              required />
            <br />
            <label>Job Title: </label>
            <input id='jobTitle'
              placeholder='ex: engineer'
              className="form-control"
              required />
            <br />
            <label>Email: </label>
            <input id='email'
              placeholder='ex: pancho@gmail.com'
              className="form-control"
              required />
            <br />
            <label>Password: </label>
            <input type="password"
              id='password'
              className="form-control"
              required />
            <br />
            <button type="submit">Sign Up</button>
            <p>Already have an Account?</p>
            <a href="#/signin">LOG IN</a>
          </form>
        </div>
        </motion.div>
  )
}

export default SignUp
