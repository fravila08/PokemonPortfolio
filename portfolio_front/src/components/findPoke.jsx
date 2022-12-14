import {useState} from "react"
import axios from "axios";
import pokeBall from "../images/pokeballs/pokeBall.png"

function FindPokemon({user, setModalShow, setNeedRelease, setShowCascade}){

    const [pokemon, setPokemon] = useState([])

    const [foundData, setFoundData]= useState(false)

    // lines 11-22: Grabs a random pokemon by id from the PokeApi
    const  getPokemon= async ()=>{
        try{
            const randomNumber = Math.floor(Math.random()*899)
            const newPokemon= await axios.request(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            setPokemon(newPokemon.data)
            setFoundData(!foundData) 
        }
        catch{
            alert("Pokemon does not exist")
        }
    }
    
    // lines 24-58: Will grab the information from the pokemon and sent it to the database allowing the user to 'capture' a pokemon
    const savePokemon = (name, nickName, move_one, move_two, move_three, move_four, picture) =>{
        try{
            name= pokemon["name"]
            picture = pokemon["sprites"]["front_default"]
            move_one = document.getElementById("move_one").innerHTML
            move_two = document.getElementById("move_two").innerHTML
            move_three = document.getElementById("move_three").innerHTML
            move_four = document.getElementById("move_four").innerHTML

            axios.post("/savePokemon", {
                name: name,
                nickname: nickName,
                move_one: move_one,
                move_two: move_two,
                move_three: move_three,
                move_four: move_four,
                picture: picture
            }).then((response)=>{
                if (response.data === false){
                    setNeedRelease(true)
                    setFoundData(!foundData)
                }
                else{
                    setFoundData(!foundData)
                    newBadge()
                    setModalShow(true)
                }
            })
        }
        catch(e){
            alert("Please find a Pokemon before trying to save.")
        }
        
    }

    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 2 && badge.data == 1){
            axios.put('badges')
            setShowCascade(true)
        }
    }
    
    return(
        <div className="insideCard">
            <h1 style={{textDecoration:"underline"}}>BUILD A TEAM</h1>
            {foundData ? <p></p>:
            <div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <button onClick={getPokemon} style={{color:"green", border:"solid green 2px", padding:"10px", borderRadius:"10px"}}>
                        FIND POKEMON
                    </button>
                </div>
            </div>}
            <div className="pokeCard">
                <div className="pokeIcon">
                    { foundData ?  pokemon["sprites"] ?<img src={pokemon["sprites"]["front_default"]} className="pokeIconPic" /> : <p></p> : <img className="pokeIconPic" src={pokeBall} />}
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                    {foundData ? pokemon["sprites"] ? <h3 className="pokeName" style={{fontFamily:'Pokemon Solid'}}>{pokemon["name"].toUpperCase()}</h3> : <p></p> : <p>Who will choose you?</p>}
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h4>ABILITIES</h4></div>
                    {foundData ? pokemon["sprites"] ? pokemon["abilities"].map((ability)=>(<h6 style={{textAlign:"center"}}>{ability["ability"]["name"]}</h6>)): <p></p> : <p></p>}
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h4>TYPES</h4></div>
                        {foundData ? pokemon["sprites"] ? pokemon["types"].map((type)=>(<h6 style={{textAlign:'center'}}>{type["type"]["name"].toUpperCase()}</h6>)) : <p></p> : <p></p>}
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                   <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h4>MOVES</h4></div>
                   {foundData ? pokemon["sprites"] ?
                    <div style={{textAlign:"center", display:"flex", justifyContent:"space-around" }}>
                        <div>
                            <h6 style={{marginBottom:"0"}} id="move_one">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</h6>
                            <h6 style={{marginBottom:"0"}} id="move_two">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</h6>
                        </div>
                        <div>
                            <h6 style={{marginBottom:"0"}} id="move_three">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</h6>
                            <h6 style={{marginBottom:"0"}} id="move_four">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</h6>
                        </div>
                    </div> : <p></p> :<p></p>}
                </div>
                
                <div style={{width:"100%", display:"flex", justifyContent:"center", paddingBottom:"2vh"}}>
                    {user ?
                    <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                        {foundData ? 
                        <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
                            <button style={{color:"green", border:"solid green 2px", padding:"5px", borderRadius:"10px"}}  onClick={savePokemon}>CAPTURE</button>
                            <button style={{color:"red", border:"solid red 2px", padding:"5px", borderRadius:"10px"}} onClick={()=>setFoundData(false)}>RUN AWAY</button>
                        </div>:<p></p>}
                    </div> : 
                    <a href="#/signIn">Log in to save your pokemon</a>}
                </div>
            </div>
        </div>
    )
}

export default FindPokemon;