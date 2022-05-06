import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
function Login() {
  return (
    <div class="login-container">
        
        <div class="inputs">
            <label>USERNAME</label>
            <input type="name"  />
            <label>PASSWORD</label>
            <input type="password"  />
            <p>Invalid username or password </p>
            <button type="submit">LOGIN</button>
            <p className='Sign-up-link'>Don's have an account?<Link to="/create" className='go-to-sign-up'>Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login