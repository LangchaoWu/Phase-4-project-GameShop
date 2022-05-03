import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPen,faHouse, faArrowRightFromBracket, faCartShopping} from '@fortawesome/free-solid-svg-icons'




function Header() {
  return (
    <nav>
        <h1>GameShop</h1>

        <div className='icons'>
            <FontAwesomeIcon className='fa-solid' icon={faUserPen}/>
            <FontAwesomeIcon className='fa-solid' icon={faHouse} />
            <FontAwesomeIcon className='fa-solid' icon={faUser} />
            <FontAwesomeIcon className='fa-solid' icon={faArrowRightFromBracket} />
            <FontAwesomeIcon className='fa-solid' icon={faCartShopping} />
           

        </div>


    </nav>
  )
}

export default Header