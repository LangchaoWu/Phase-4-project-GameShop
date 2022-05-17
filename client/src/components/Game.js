import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
// import { faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import { useNavigate} from 'react-router-dom'
function Game({game,isAdmin}) {
    const navigate=useNavigate()
  function handleUpdate(e){
    e.stopPropagation();
    navigate(`/update/${game.id}`)
  }
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
          {isAdmin? <FontAwesomeIcon className="admin-edit" icon={faPenToSquare} onClick={handleUpdate}/> :null}
            <FontAwesomeIcon className='add-btn' icon={faCartPlus} />
        </div>
    </div>
  )
}

export default Game