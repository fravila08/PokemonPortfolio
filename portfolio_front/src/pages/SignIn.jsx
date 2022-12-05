import axios from 'axios'
import {motion} from "framer-motion"

function SignIn() {
  const signIn = async()=>{
    event.preventDefault()
    let email=document.getElementById("signInEmail").value
    let password=document.getElementById("signInPassword").value
    console.log(email, password)
    let myResponse=await axios.post('sign_in',{
      'email':email,
      'password':password
    })
    console.log(myResponse.data)
    if (myResponse.data["signIn"]==true){
      window.location.href="/"
    }
    else{
        alert("incorrect input")
        window.location.reload()
    }
  }
    
  
  return (
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}  
      style={{display:"flex", justifyContent:"center", marginTop:"20vh", paddingBottom:"10vh"}}>
        <div className="signup">
          <form onSubmit={signIn} style={{border:"black solid 2px"}}>
            <input id='signInEmail' placeholder='email' />
            <input id='signInPassword' placeholder='password' type="password"/>
            <button onClick={signIn}>Sign In</button>
          </form>
        </div>
      </motion.div>
  )
}

export default SignIn;
