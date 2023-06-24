import React, {useState, useEffect} from 'react';
import axios from "axios"

const ShowPoke = () => {
    const [pokeList, setPokeList] = useState([])
    let [count, setCount] = useState(1)
    useEffect(() => {
        if (count < 808) {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + count).then(response => {
            setPokeList([...pokeList, response.data.name])
            setCount(count += 1)
            })
        }
        else{
            return
        }
    }, [count]);

    return(
        <div>
            {pokeList.map((poke,idx)=>(
                <p key={idx}>{poke}</p> 
            ))}
        </div>
    )
}

export default ShowPoke;