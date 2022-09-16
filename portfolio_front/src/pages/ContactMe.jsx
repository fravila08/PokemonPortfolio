import pokeBall from "../images/pokeballs/pokeBall.png"
import masterBall from "../images/pokeballs/masterBall.png"
import ultraBall from "../images/pokeballs/ultraBall.png"
import greatBall from "../images/pokeballs/greatBall.png"
import {Shake} from "reshake"
import axios from "axios"
import {motion} from "framer-motion"
import {send} from 'emailjs-com';
import {useState} from "react"

function ContactMe({setShowVolcano}){
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_uxi6i05',
          'template_xvwlb3u',
          toSend,
          'B8g7aY9kzfbI5HR-_'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };

    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 7 && badge.data == 6){
            axios.put('badges')
            setShowVolcano(true)
        }
    }


    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        style={{paddingTop:"5vw"}}>
            <div style={{textAlign:"center"}}>
                <h1>Contact Me</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection:"column", alignContent:"center", }}>
                    <div id="contactForm" className="contactRow">
                        <div style={{display:"flex", flexDirection:"column-reverse"}}>
                            <h3>Send Me an Email</h3>
                            <Shake><img className="ballRow" src={masterBall}/></Shake>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="formContactHolder">
                                <input
                                    type='text'
                                    name='from_name'
                                    placeholder='from name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                />
                                <input
                                    type='text'
                                    name='reply_to'
                                    placeholder='Your email'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                />  
                            </div>
                            <textarea
                                className="wanttextarea"
                                type='text'
                                name='message'
                                placeholder='Your message'
                                value={toSend.message}
                                onChange={handleChange}
                            />
                                               
                            <button type="submit" style={{color:"white",backgroundColor:"green", boder:"10px green solid", width:"100%"}}>Send</button>
                        </form>
                    </div>
                    <div className="contactRow"   onClick={newBadge}>
                        <Shake><img className="ballRow" src={ultraBall}/></Shake>
                        <div style={{display:"flex", width:"70%", justifyContent:"space-between"}}>
                            <h5>LINKEDIN:</h5><h5><a target="_blank" href="https://linkedin.com/in/francisco-r-avila">CONNECT</a></h5>
                        </div>
                    </div>
                    <div className="contactRow" >
                        <Shake><img className="ballRow" src={greatBall}/></Shake>
                        <div style={{display:"flex", width:"70%", justifyContent:"space-between"}}>
                            <h5>GITHUB:</h5><h5><a href="https://github.com/fravila08">MY REPOSITORIES</a></h5>
                        </div>
                    </div>
                    <div className="contactRow">
                        <Shake><img className="ballRow" src={pokeBall}/></Shake>
                        <div style={{display:"flex", width:"70%", justifyContent:"space-between"}}>
                            <h5>PHONE:</h5><h5><a href="#">(559)819-9857</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactMe;