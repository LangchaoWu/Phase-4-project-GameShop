import React, {useState}  from 'react'
import { Link,useNavigate} from 'react-router-dom'
function Login({setCurrentUser,setIsLogin,setIsAdmin,setCarts}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const [error, setError] = useState([])

  function onSubmit(e){
    e.preventDefault()
    const user = {
        username: username.toLowerCase(),
        password:password
    }
   
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(user=>{
          console.log(user)
          if(user.admin){
            setIsAdmin(true)
          }
          setCurrentUser(user)
           setIsLogin(true)
           setCarts(user.carts)
           navigate("/home")
        })
        
      } else {
        res.json()
        .then(json => setError(json.error))
      }
    })
}
  return (
    <div className="login-container">
        
        <form className="inputs" onSubmit={onSubmit}>
            <label>USERNAME</label>
            <input type="name"  value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>PASSWORD</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error?<div className='error-message'>{error}</div>:null}
            <button type="submit">LOGIN</button>
            <p className='Sign-up-link'>Don't have an account?<Link to="/create" className='go-to-sign-up'>Sign up</Link></p>
        </form>
    </div>
  )
}

export default Login