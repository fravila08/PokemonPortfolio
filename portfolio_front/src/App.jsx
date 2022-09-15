import { useState, useEffect } from 'react'
import './App.css'
import NavBaar from './components/Navbar'
import {HashRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ThePast from './pages/ThePast';
import ContactMe from "./pages/ContactMe"
import PokeSep from './components/PokeSep';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import axios from 'axios';
import MyProfile from './pages/MyProfile';
import MyVerticallyCenteredModal from './components/modals';
import ReleaseModal from './components/releaseModal';
import NeedToRelease from './components/tooManyModal';
import BoulderBadge from './modals/boulderModal';
import CascadeBadge from './modals/cascadeModal';
import ThunderBadge from './modals/thunderModal';
import RainbowBadge from './modals/rainbowModal';
import SoulBadge from './modals/soulModal';
import MarshBadge from './modals/marshModal';
import VolcanoBadge from './modals/volcanoModal';
import EarthBadge from './modals/earthModal';
import AnimatedRoutes from './components/AnimatedRoutes';


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken



function App() {
  const [user, setUser] = useState(null)

  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }

  async function curr_user() {
    const response = await axios.get('profile_page')
    setUser(response.data)
  }

  useEffect(() => {
    curr_user()
  }, [])

  const [modalShow, setModalShow] = useState(false);
  const [releaseShow, setReleaseShow]= useState(false);
  const [needRelease, setNeedRelease]=useState(false);
  const [showBoulder, setShowBoulder]= useState(false);
  const [showCascade, setShowCascade]=useState(false);
  const [showThunder, setShowThunder]=useState(false);
  const [showRainbow, setShowRainbow]=useState(false);
  const [showSoul, setShowSoul]=useState(false)
  const [showMarsh, setShowMarsh]=useState(false);
  const [showVolcano, setShowVolcano]=useState(false);
  const [showEarth, setShowEarth]=useState(false)
  
  
  return (
    <div className="App" >      
      {user ?
          <div className='upRight' >
            <a href="#/myProfile" style={{textDecoration:"none", color:"gold"}} ><strong>My Profile</strong></a>
            <a href="#" onClick={signOut}  style={{textDecoration:"none", color:"gold"}} ><strong>Sign Out</strong></a>
          </div> :
          <div className="upRight" >
            <a href="#/signUp" style={{textDecoration:"none", color:"gold"}} ><strong>Sign Up</strong></a>
            <a href="#/signIn" style={{textDecoration:"none", color:"gold"}} ><strong>Sign In</strong></a> 
          </div> }
      <div  className='topHeader' >
        <div style={{display:"flex", justifyContent:"center", height:"35%", marginBottom:"18%"}}>
          <div style={{textAlign:"center"}}>
            <span id="letter1" className='letters'>W</span>
            <span id="letter2" className='letters'>e</span>
            <span id="letter3" className='letters'>l</span>
            <span id="letter4" className='letters'>c</span>
            <span id="letter5" className='letters'>o</span>
            <span id="letter6" className='letters'>m</span>
            <span id="letter7" className='letters'>e</span>
          
            <span id="letter8" className='letters'>T</span>
            <span id="letter9" className='letters'>o</span>
            <span id="letter10" className='letters'> </span>
            <span id="letter11" className='letters'>M</span>
            <span id="letter12" className='letters'>y</span>
            <span id="letter13" className='letters'> </span>
            <span id="letter14" className='letters'>P</span>
            <span id="letter15" className='letters'>o</span>
            <span id="letter16" className='letters'>r</span>
            <span id="letter17" className='letters'>t</span>
            <span id="letter18" className='letters'>f</span>
            <span id="letter19" className='letters'>o</span>
            <span id="letter20" className='letters'>l</span>
            <span id="letter21" className='letters'>i</span>
            <span id="letter22" className='letters'>o</span>
          </div>
        </div>
        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        <ReleaseModal
        user={user}
        show={releaseShow}
        onHide={() => {
          setReleaseShow(false)
          window.location.reload()
        }}
        />
        <NeedToRelease
        user={user}
        show={needRelease}
        onHide={() => setNeedRelease(false)}
        />
        <BoulderBadge 
         show={showBoulder}
         onHide={()=>{setShowBoulder(false)}}
        />
        <CascadeBadge 
         show={showCascade}
         onHide={()=>{setShowCascade(false)}}
        />
        <ThunderBadge 
         show = {showThunder}
         onHide={()=>{setShowThunder(false)}}
        />
        <RainbowBadge 
         show={showRainbow}
         onHide= {()=>{setShowRainbow(false)}}
        />
        <SoulBadge 
         show={showSoul}
         onHide={()=>{setShowSoul(false)}}
        />
        <MarshBadge 
         show={showMarsh}
         onHide={()=>{setShowMarsh(false)}}
        />
        <VolcanoBadge 
         show={showVolcano}
         onHide={()=>{setShowVolcano(false)}}
        />
        <EarthBadge 
         show={showEarth}
         onHide={()=>{setShowEarth(false)}}
        />
        
        <NavBaar user={user} setShowBoulder={setShowBoulder} setShowSoul={setShowSoul} setShowMarsh={setShowMarsh}  />
      </div>
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
