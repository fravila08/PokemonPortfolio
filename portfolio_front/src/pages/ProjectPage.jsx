import axios from "axios";
import {useState, useEffect} from "react"
import pokeBall from "../images/pokeballs/pokeBall.png"
import { Shake } from "reshake"
import MyAccordion from "../components/accordion";
import FindPokemon from "../components/findPoke";
import {motion} from "framer-motion"

function MyProjects({user, setModalShow, setNeedRelease, setShowCascade, setShowThunder, setShowRainbow}){
    const [pokemon, setPokemon]=useState([])
    const [show, setShow]= useState(false)
    let urlList=[]
    
    // lines 16-25: sends axios request to PokeAPI to grab each individual pokemon image and pushes them into urlList
    useEffect(()=>{
            ['jolteon', 'mewtwo', 'dragonite', 'kadabra', 'blastoise', 'tyranitar'].map(async (pokon)=>{    
                const newPokemon = await axios.request(`https://pokeapi.co/api/v2/pokemon/${pokon}`)
                urlList.push(newPokemon.data["sprites"]["front_default"])
                setPokemon(urlList)
                if (urlList.length === 6){
                    setShow(!show)
                }
            })
        },[])
        
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}  
        style={{paddingTop:"6vw", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2>My favorite Fire Red team</h2>
            <div className="myTeamHolder" >
                {/* lines 36-42: maps through each img url in urlList and renders a pokemon with a pokemon background*/}
                {show ? pokemon.map((poke)=>(
                    <div>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src={pokeBall} className="backgroundBalls" />
                            <Shake style={{zIndex:"2"}}><img className="pokeInBall" src={poke} /></Shake>
                        </div>
                    </div>
                )): <p></p>}
            </div>
            <div className="cards">
                <div className="leftCard">
                    <FindPokemon user={user} setModalShow={setModalShow} setNeedRelease={setNeedRelease} setShowCascade={setShowCascade}/>
                </div>
                <div className="middleCard" style={{justifyContent:"center", textAlign:"center"}}>
                    <h1 style={{textDecoration:"underline", justifyContent:"center", alignItems:"center"}}>CERTIFICATES & PROJECTS</h1>
                    <MyAccordion /> 
                </div>
                <div className="rightCard">
                        <h1 style={{textDecoration:"underline"}}>EDUCATION</h1>
                        <p style={{textDecoration:"underline"}}>
                        MSJC Computer Science</p>
                        <p>
                        The curriculum in Computer Science is designed to provide the transfer 
                        student the opportunity to earn an Associate in Science in Computer Science 
                        for Transfer degree. Computer Science is the study of computers, their design, 
                        and their uses for computation, data processing, and systems control, including 
                        design and development of computer hardware and software, and programming. Computer 
                        Science provides a foundation of knowledge for students with career objectives in a 
                        wide range of computing and computer-related professions.
                        <br/>
                        AS.CIS.CS.OPTB.AST or AS.CIS.CS.OPTCAST
                        <br/>
                        <a href="https://catalog.msjc.edu/instructional-programs/computer-information-systems/computer-science-as-t/#text">MSJC</a>    
                        </p>
                </div>
            </div>
        </motion.div>
    )
}

export default MyProjects;