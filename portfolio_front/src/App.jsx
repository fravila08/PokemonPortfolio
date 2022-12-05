import { useState, useEffect } from 'react'
import './App.css'
import NavBaar from './components/Navbar'
import {HashRouter as Router} from "react-router-dom";
import PokeSep from './components/PokeSep';
import axios from 'axios';
import AnimatedRoutes from './components/AnimatedRoutes';
import Banner  from './components/banner';
import getCookie from './components/csrfToken';
import ModalLogic from './components/modalLogic';


<getCookie />
// the following on lines 15 & 16 utilize the getCookie function to aquire a CSRFTOKEN to allow me to make axios calls
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken

function App(){ 
  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }
  // lines 26-34 will conduct an axios call during mounting and dismounting call to Django to grab user information from database if user is logged in
  const [user, setUser] = useState(null)
  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(() => {
    curr_user()
  }, [])

  useEffect(()=>{
    console.log(user)
  },[user])

  // the following are switches for all independent modals in the application
  const [modalShow, setModalShow] = useState(false);
  const [releaseShow, setReleaseShow]= useState(false);
  const [needRelease, setNeedRelease]=useState(false);
  const [showBoulder, setShowBoulder]= useState(false);
  const [showCascade, setShowCascade]=useState(false);
  const [showThunder, setShowThunder]=useState(false);
  const [showRainbow, setShowRainbow]=useState(false);
  const [showSoul, setShowSoul]=useState(false);
  const [showMarsh, setShowMarsh]=useState(false);
  const [showVolcano, setShowVolcano]=useState(false);
  const [showEarth, setShowEarth]=useState(false);
  
  
  return (
    <div className="App" >      
      {user ?
          // lines 52-61: if the user is signed in we will see a link to sign out and a link to the users profile else we will seee a sign up/sign in link
          <div className='upRight' >
            <a href="#/myProfile" style={{textDecoration:"none", color:"gold"}} ><strong>My Profile</strong></a>
            <a href="#" onClick={signOut}  style={{textDecoration:"none", color:"gold"}} ><strong>Sign Out</strong></a>
          </div> :
          <div className="upRight" >
            <a href="#/signUp" style={{textDecoration:"none", color:"gold"}} ><strong>Sign Up</strong></a>
            <a href="#/signIn" style={{textDecoration:"none", color:"gold"}} ><strong>Sign In</strong></a> 
          </div> }
      <div  className='topHeader' >
        <Banner />
        {/* passing all modal switches to the ModalLogic file to allow each individual modal to access its corresponding switch */}
        <ModalLogic
        user={user} 
          modalShow={modalShow} setModalShow={setModalShow}
          releaseShow={releaseShow} setReleaseShow={setReleaseShow}
          needRelease={needRelease} setNeedRelease={setNeedRelease}
          showBoulder={showBoulder} setShowBoulder={setShowBoulder}
          showCascade={showCascade} setShowCascade={setShowCascade}
          showThunder={showThunder} setShowThunder={setShowThunder}
          showRainbow={showRainbow} setShowRainbow={setShowRainbow}
          showSoul={showSoul} setShowSoul={setShowSoul}
          showMarsh={showMarsh} setShowMarsh={setShowMarsh}
          showVolcano={showVolcano} setShowVolcano={setShowVolcano}
          showEarth={showEarth} setShowEarth={setShowEarth}
        />
        <NavBaar user={user} setShowBoulder={setShowBoulder} setShowSoul={setShowSoul} setShowMarsh={setShowMarsh}  />
      </div>
      {/* creates the seperation between the top header and 'body' giving the pokeball illusion */}
      <PokeSep />
      <Router>
        <AnimatedRoutes user={user} setModalShow={setModalShow} setShowCascade={setShowCascade} 
        setNeedRelease={setNeedRelease} setShowThunder={setShowThunder} setShowRainbow={setShowRainbow} 
        setShowVolcano={setShowVolcano} setReleaseShow={setReleaseShow} setShowEarth={setShowEarth} />
      </Router>
    </div>
  )
}

export default App
