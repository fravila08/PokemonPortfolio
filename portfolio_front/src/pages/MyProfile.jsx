import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import circle from "../assets/circle.png"
import goldStar from "../assets/goldStar.png"
import trainer from "../assets/trainer.png"
import pokeBall from "../images/pokeballs/pokeBall.png"
import boulder from "../images/badges/boulder.png"
import cascade from "../images/badges/cascade.png"
import earth from "../images/badges/earth.png"
import marsh from "../images/badges/marsh.png"
import rainbow from "../images/badges/rainbow.png"
import soul from "../images/badges/soul.png"
import thunder from "../images/badges/thunder.png"
import volcano from "../images/badges/volcano.png"
import {motion} from "framer-motion"

function Myprofile({user, setReleaseShow, setShowEarth}){
    const [pokemon, setPokemon] = useState([])
    const [show, setShow] = useState(false)
    const [count, setCount]=useState(0)

    // lines 24-32: Grabs users captured pokemon from the database upon mounting and dismounting
    const theATeam = async () =>{
        let newTeam =await axios.get("getMyPokemon")
        setPokemon(newTeam.data)
        setShow(!show)
    }

    useEffect(()=>{
        theATeam()
    },[])
    
    // lines 35-46: sends a delete request to delete a pokemon from a users
    const releasePokemon=(id)=>{
        try{
            axios.delete(`release/${id}`).then((response)=>{
                newBadge()
                setReleaseShow(true)
            })
            
        }
        catch{
            alert("Couldn't release Pokemon")
        }
    }
    
    // lines49-57: returns the number of badges the user has unlocked to show them in users trainer card
    const getBadges= async()=>{
        const badgeNumber = await axios.get("badges")
        let num= badgeNumber.data
        setCount(num)
    }

    useEffect (()=>{
        getBadges()
    },[])
    
    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 8 && badge.data == 7){
            axios.put('badges')
            setShowEarth(true)
        }
    }
    console.log(user && user.date_joined)
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        className="myProfileHolder">
            <div className="pokemonTeam">
                {/* maps through each individual pokemon the user has saved and renders them individually */}
                {pokemon.length ? 
                pokemon.map((poke)=>(
                    <div className="pokeCardTeam">
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <img src={pokeBall} style={{position:"absolute", height:"10vh", zIndex:"-1"}}/>
                            <img className="releasePoke" src={poke.picture} />
                            <button style={{color:"red", border:"2px solid red", borderRadius:"5px"}} onClick={()=>releasePokemon(poke.id)}>RELEASE</button>
                        </div>
                        <div>
                            <ul>{poke.nickname ?<strong> {poke.nickname}</strong> : <strong>{poke.name.toUpperCase()}</strong>}
                                <li>{poke.move_one}</li>
                                <li>{poke.move_two}</li>
                                <li>{poke.move_three}</li>
                                <li>{poke.move_four}</li>
                            </ul>
                        </div>
                    </div>
                )): 
                <p></p>}
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className='trainerCard'>
                    <div className="cardHeader">
                        <div>
                            <h2 style={{color:"goldenrod", borderBottom:"solid 2px goldenrod", borderTop:"solid 2px goldenrod"}}>
                            TRAINER CARD
                            </h2>
                        </div>
                        <div className="idOnCard">
                            <h2 >IDNo.000{user && user.id}</h2>
                        </div>
                    </div>
                    <div className="cardBody">
                        <div className="leftSide">
                            <h4 className="leftSideContent" style={{textDecoration:"underline"}} ><img className="bulletCircle" src={circle} />NAME: <strong>{user && user.first_name} {user && user.last_name}</strong></h4>
                            <div style={{display:"flex", justifyContent:"right"}}><img src={goldStar} className="star" /><img src={goldStar} className="star" /><img src={goldStar} className="star" /></div>
                            <h4 className="leftSideContent" ><img className="bulletCircle" src={circle} />JOB TITLE: {user && user.job_title}</h4>
                            <h4 className="leftSideContent"><img className="bulletCircle" src={circle} />EMAIL: {user && user.email}</h4>
                            <h4 className="leftSideContent"><img className="bulletCircle" src={circle} />MEMBER SINCE: {user && user.date_joined}</h4>
                        </div>
                        <div className="rightSide">
                            <img src={trainer} style={{height:"25vh"}}/>
                        </div>
                    </div>
                    <div className="badges">
                        BADGES
                        <div style={{display:"flex", justifyContent:"space-around"}} >
                            {/* lines 123-146: This will return a badge if the user has the number of badges unlocked */}
                            <div className="badgeBorder">
                                {count >=1 ?<img src={boulder} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=2 ?<img src={cascade} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=3 ?<img src={thunder} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=4 ?<img src={rainbow} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=5 ?<img src={soul} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=6 ?<img src={marsh} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=7 ?<img src={volcano} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count == 8 ?<img src={earth} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default Myprofile;