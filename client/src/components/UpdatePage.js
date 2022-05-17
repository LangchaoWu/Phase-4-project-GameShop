import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
function UpdatePage({games,setGames}) {
    const params = useParams();
    const [game,setGame]=useState({})
   const [name,setName]=useState("")
   const [price,setPrice]=useState("")
   const navigate=useNavigate()
   function handleNameChange(e){
    setName(e.target.value)
   }
   function handlePriceChange(e){
    setPrice(e.target.value)
   }
    useEffect(()=>{
        fetch(`/games/${params.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setGame(data)
          setName(data.name)
          setPrice(data.price)
         
        })

      },[])

      function handleClick(){
        fetch(`/games/${game.id}`,{
            method:'DELETE'
        })
        .then(()=>{
            const newGames=games.filter(eachGame=> eachGame.id !== game.id )
            setGames(newGames)
            navigate("/home")
        })
      }
     function handleSubmit(e){
        e.preventDefault();
        const updatedGame={...game,name:name,price:price}
        fetch(`/games/${game.id}`,{
            method:"PATCH",
             headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(updatedGame)
         })
        .then(res=>res.json())
        .then(data => {
            // console.log(data)
            const updatedGames=games.map(game=> {
               if(game.id===data.id)
                    return data;
                else
                    return game;
           })
        //    console.log(updatedGames)
           setGames(updatedGames)
           navigate(`/games/${data.id}`)
          //  if(data.game_type==="PS5"){
          //   navigate("/PlayStation")
          //  }
          //  else if(data.game_type ==="xbox"){
          //   navigate("/Xbox")
          //  }
          //  else{
          //   navigate("/NintendoSwitch")
          //  }
        }
        )
        
        }

  return (
    <div className="update-container">
        
    <form className="inputs" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="name" name='name' value={name} onChange={handleNameChange}/>
        <label>Price</label>
        <input type="price" name='price'value={price} onChange={handlePriceChange}/>

        <button type="submit">upadate</button>

    </form>
    <button onClick={handleClick}>delete</button>
</div>
  )
}

export default UpdatePage