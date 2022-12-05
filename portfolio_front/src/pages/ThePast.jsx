import zapdos from "../images/pokemon/zapdos.png";
import articuno from "../images/pokemon/articuno.png";
import moltres from "../images/pokemon/moltres.png";
import { Shake } from "reshake"
import {motion} from "framer-motion"

function ThePast(){
    return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} 
    style={{marginTop:"6vh"}} >
        <div style={{textAlign:"center"}}>
                <h1 style={{textDecoration:"underline"}}>EXPERIENCE</h1>
            </div>
        <div style={{paddingTop:"4vw", width:"70%"}}>
            
            <div style={{display:"flex", justifyContent:"center", width:"100%", textAlign:"center"}}>
                <div style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center", width:"70%", textAlign:"center"}}>
                    <div className="xpRow">
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>TEACHER'S ASSISTANT</h3>
                            <p>
                                ▪ Ensures all material for the 17-week curriculum on GitHub (consisting of over 100 separate repositories) is properly
                                documented to ensure students ability to utilize the material with ease and improve their learning experience.
                                ▪ Assist Instruction during the curriculum by providing insight in React, Django, PostgreSQL, HTML, CSS, Bootstrap, Rest
                                API’s, OOP, CRUD, and AWS ec2 instances along with AWS route53 functionality to ensure student success.
                                ▪ Lead review sessions with students to address questions and concerns over various topics such as React, Django etc.
                                ▪ Participate in weekly retros with instructors and senior stakeholders to ensure continuous curriculum improvement.
                                ▪ Mentor students on JS/Python full-stack development, including pair programming, debugging, leading white board
                                exercises, conducting mock interviews & performing code review.
                            </p>
                        </div>
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={articuno}/></Shake>
                            </div>
                        </div>
                    </div>
                    <div className="xpRow">
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={moltres}/></Shake>
                            </div>
                        </div>
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>COMBAT INSTRUCTOR</h3>
                            <p>
                                ▪ Trained and supervised the professional development of over 1700 entry-level Marines in Infantry Tactics through six
                                three-month training cycles conducting various forms of performance and academic evaluations.
                                ▪ Ensured completion of training events by supervising and coordinating ammunition, safety structures, tactical vehicles
                                serviceability, instructors, student body, and any other equipment needed for the event of the day.
                            </p>
                        </div>
                    </div>
                    <div className="xpRow">
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>SECTION LEADER</h3>
                            <p>
                                ▪ Trained over 10 foreign nationals on Mortar Gunnery to develop warfighting capabilities and foreign relations.
                                ▪ Ensured the development and wellbeing of 13 Marines in both physical and mental aspects through constant training
                                in both Infantry Tactics, and Troop Welfare exercises. This allowed for the success of all 13 Marines under my
                                leadership who were quickly assigned to become Section Leaders of surrounding working agencies. 
                            </p>
                        </div>
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={zapdos}/></Shake>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default ThePast;