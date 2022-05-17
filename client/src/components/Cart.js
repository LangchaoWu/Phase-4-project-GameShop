import React from 'react'
import { useNavigate} from 'react-router-dom'
function Cart({currentUser,carts,setCarts}) {
    console.log(carts)
    const navigate=useNavigate()
  return (
    <div className='cart-page-container'>
        <div className='cart-info'>
        {carts.map(cart=>{
           return <div className='cart-item-container' key={cart.id}>
                <div className='item'>
                    <div className='item-img'>
                        <img src={cart.game.image} alt={cart.game.name}/>
                    </div>
                    <div className='item-text'>
                        <h1>{cart.game.name}</h1>
                        <h1>${cart.game.price}</h1>
                    </div>
                 </div>
            </div>
        })}

    </div>
    <div className='check-out-btn'>
            <button onClick={()=>{
                 fetch(`/carts_delete/${currentUser.id}`,{
                    method:'DELETE'
                })
                .then(()=>{
                    navigate('/home')
                    setCarts([])
                })
                
            }}>Check out</button>        
    </div> 


    </div>
  )
}

export default Cart