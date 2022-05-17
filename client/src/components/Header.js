import React,{useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPen,faBars, faArrowRightFromBracket, faCartShopping, faGamepad} from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'



function Header({isLogin,setIsLogin,isAdmin,setIsAdmin,currentUser,setCurrentUser,carts}) {
    const navigate=useNavigate()
    const [menuBarToggle,setMenuBarToggle]=useState(false)
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsLogin(false)
            setCurrentUser({})
            setIsAdmin(false)
        })
    }
  return (
    <nav className='nav-container'>
        <FontAwesomeIcon className="menubars" icon={faBars} onClick={()=>setMenuBarToggle(menuBarToggle=> !menuBarToggle)}/>
        <div className='logo' onClick={()=>{ navigate("/home") }}>
            <FontAwesomeIcon className='game-icon' icon={faGamepad}/>
            <h1>GameShop</h1>
        </div>
       {menuBarToggle?
       <div className='nav-links-active'>
           <NavLink to="/home" className="nav-link-text"><h2 className='nav-link-text'>Home</h2></NavLink>
           <NavLink to="/PlayStation" className="nav-link-text"><h2 className='nav-link-text'>PlayStation</h2></NavLink>
           <NavLink to="/Xbox" className="nav-link-text"><h2 className='nav-link-text'>Xbox</h2></NavLink>
           <NavLink to="/NintendoSwitch" className="nav-link-text"><h2 className='nav-link-text'>Nintendo Switch</h2></NavLink>
       </div> 
        :
       <div className='nav-links'>
           <NavLink to="/home" className="nav-link-text"><h2 className='nav-link-text'>Home</h2></NavLink>
           <NavLink to="/PlayStation" className="nav-link-text"><h2 className='nav-link-text'>PlayStation</h2></NavLink>
           <NavLink to="/Xbox" className="nav-link-text"><h2 className='nav-link-text'>Xbox</h2></NavLink>
           <NavLink to="/NintendoSwitch" className="nav-link-text"><h2 className='nav-link-text'>Nintendo Switch</h2></NavLink>
       </div>
        }
        <div className='icons'>
            {isAdmin?<FontAwesomeIcon className='fa-solid' icon={faUserPen} onClick={ ()=> navigate("/admin")}/>:null}
            {isLogin? <div className='user-name'><span>Hi,  {currentUser.username}</span></div> :null}

            {!isLogin ? <NavLink to="/login" className="Nav-link"><FontAwesomeIcon className='fa-solid' icon={faUser} /></NavLink>:
            <FontAwesomeIcon className='fa-solid' icon={faArrowRightFromBracket} onClick={logout} /> }
            <div className='cart-container'>
            {carts.length===0? null:<span className='num'>{carts.length}</span>}
            <FontAwesomeIcon className='cart' icon={faCartShopping} onClick={()=> navigate("/cart")}/>
            </div>
            
        </div>

        
    </nav>
  )
}

export default Header

