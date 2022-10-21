import { motion } from "framer-motion"
import MyTechPictures from "../components/myTech";

function Home(){
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        style={{paddingTop:"4vw", display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"column", textAlign:"center", width:"70%", paddingBottom:"10vh"}}>
                <h1>Greetings,</h1>
                <h3>
                    I have recently completed a Full-Stack Software Engineering Boot Camp where I learned
                    to create Full-Stack applications with React, PostgreSQL, and Django. I can manage API's through AJAX request
                    to create content and/or grab necessary information for a certain task. I've also learned the concepts of CRUD
                    and OOP to create better interactive applications. Now that I've completed an 8 year term with the 
                    United States Marine Corps, I am excited and looking forward to the beginning of my career as a Junior Software Engineer.
                </h3>
                {/* renders a series of pictures of different  technologies that I feel proficient in */}
                <MyTechPictures />
            </div>
        </motion.div>
    )
}

export default Home;