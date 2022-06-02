import React, {useState}  from 'react'
import { Link,useNavigate} from 'react-router-dom'
function Create({setCurrentUser,setIsLogin,setCarts}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const navigate=useNavigate()
  function onSubmit(e){
    e.preventDefault()
    const user = {
        username: username.toLowerCase(),
        password:password,
        admin:false
    }
   
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        setErrors(data.error)
      } else {
        setCurrentUser(data)
        setIsLogin(true)
        setCarts(data.carts)
        navigate("/home")
      }
    })
}
  return (
    <div className="create-container">
        
        <form className="inputs" onSubmit={onSubmit}>
            <label>USERNAME</label>
            <input type="name"  value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>PASSWORD</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors?errors.map((e,index) => <div key={index} className='error-message'>{e}</div>):null}
            {/* {error?<div className='error-message'>{error}</div>:null} */}
            <button type="submit">Sign Up</button>
            <p className='login-link'>Already have an account?<Link to="/login" className='go-to-login'>Login</Link></p>
        </form>
    </div>
  )
} 

export default Create