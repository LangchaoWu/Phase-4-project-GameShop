import React,{useState}from 'react'
import { Link,useNavigate} from 'react-router-dom'
function Admin({games,setGames}) {
  const navigate=useNavigate()
  const [errors, setErrors] = useState([])
  const [newGame,setNewGame]=useState({
    name:"",
    price:"",
    image:"",
    game_type:"PS5"
  })
  function handleChange(e){
      setNewGame({...newGame,[e.target.name]:e.target.value})
  }

  function onSubmit(e){
    e.preventDefault()
   
    fetch(`/games`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newGame)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        setErrors(data.error)
      } else {
        setGames([...games,data])
        navigate("/home")
      }
    })
}
  return (
    <div className="admin-container">
        
    <form className="inputs" onSubmit={onSubmit}>
        <label>Game Name</label>
        <input name="name" value={newGame.name} onChange={handleChange} />
        <label>Price</label>
        <input name="price"  value={newGame.price} onChange={handleChange}/>
        <label>Image</label>
        <input name="image"  value={newGame.image} onChange={handleChange}/>
        <label>Game-type</label>
        <select name="game_type" className='game-type' value={newGame.game_type} onChange={handleChange}>
                <option value="PS5">PlayStation 5</option>
                <option value="xbox">Xbox</option>
                <option value="ns">Nintendo Switch</option>
        </select>
        
        {errors?errors.map((e,index) => <div key={index} className='error-message'>{e}</div>):null}
        <button type="submit">Create</button>
       
    </form>
</div>
  )
}

export default Admin