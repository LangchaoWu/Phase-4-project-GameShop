import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'
function Game({game}) {
    const navigate=useNavigate()
  return (
    <div className='card-container' onClick={()=> navigate(`/games/${game.id}`)}>
        <div className='image-container'>
            <img src={game.image} alt={game.name} />
        </div>

        <div className='card-content'>
            <p className='card-name'>{game.name}</p>
            <p className='card-price'>${game.price}</p>
        </div>
        <div className='card-btn'>
        <FontAwesomeIcon className='add-btn' icon={faCartPlus} />
        </div>
    </div>
  )
}

export default Game