import React,{useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPen,faBars, faArrowRightFromBracket, faCartShopping, faGamepad} from '@fortawesome/free-solid-svg-icons'
import { NavLink,Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'



function Header({isLogin,isAdmin}) {
    const navigate=useNavigate()
const [menuBarToggle,setMenuBarToggle]=useState(false)
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
           <h2 className='nav-link-text'>PlayStation</h2>
           <h2 className='nav-link-text'>Xbox</h2>
           <h2 className='nav-link-text'>Nintendo Switch</h2>
       </div> 
        :
       <div className='nav-links'>
           <NavLink to="/home" className="nav-link-text"><h2 className='nav-link-text'>Home</h2></NavLink>
           <h2>PlayStation</h2>
           <h2>Xbox</h2>
           <h2>Nintendo Switch</h2>
       </div>
        }
        <div className='icons'>
            {isAdmin?<FontAwesomeIcon className='fa-solid' icon={faUserPen}/>:null}
            {isLogin? <div className='user-name'><span>Hi,  </span></div> :null}

            {!isLogin ? <NavLink to="/login" className="Nav-link"><FontAwesomeIcon className='fa-solid' icon={faUser} /></NavLink>:
            <FontAwesomeIcon className='fa-solid' icon={faArrowRightFromBracket} /> }
            <FontAwesomeIcon className='fa-solid' icon={faCartShopping} />
        </div>


    </nav>
  )
}

export default Header