import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
function Create() {
  return (
    <div class="create-container">
        
        <div class="inputs">
            <label>USERNAME</label>
            <input type="name"  />
            <label>PASSWORD</label>
            <input type="password"  />
            <p>Invalid username or password </p>
            <button type="submit">Sign Up</button>
            <p className='login-link'>Already have an account?<Link to="/login" className='go-to-login'>Login</Link></p>
        </div>
    </div>
  )
}

export default Create