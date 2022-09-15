import {Routes, Route, useLocation} from "react-router-dom";
import MyProfile from '../pages/MyProfile';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ThePast from '../pages/ThePast';
import ContactMe from "../pages/ContactMe";
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes({user, setModalShow, setShowCascade, setNeedRelease, setShowThunder, setShowRainbow, setShowVolcano, setReleaseShow, setShowEarth}){
    const location=useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
            <Route path="/" element={<HomePage />} />
            <Route path="/myProjects" element={<ProjectPage user={user} setModalShow={setModalShow} setShowCascade={setShowCascade} setNeedRelease={setNeedRelease} 
            setShowThunder={setShowThunder} setShowRainbow={setShowRainbow}  />} />
            <Route path='/thePast' element={<ThePast />} />
            <Route path='/contactMe' element={<ContactMe user={user} setShowVolcano={setShowVolcano}/>} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/myProfile' element={<MyProfile user={user} setReleaseShow={setReleaseShow} setShowEarth={setShowEarth}/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;