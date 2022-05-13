import React from 'react'
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck} from '@fortawesome/free-solid-svg-icons'
// import { useParams } from 'react-router-dom';
function Detail() {
    const [game,setGame]=useState({})
    const params = useParams();
    const [currentImg,setCurrentImg]=useState(game.image)
    const [featureImgs,setFeatureImgs]=useState([])
    const [features,setFeatures]=useState([])
    useEffect(()=>{
        fetch(`/games/${params.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setGame(data)
          setCurrentImg(data.image)
          setFeatureImgs(data.images)
          setFeatures(data.features)
          
          
        })
      },[])


      function handleClick(img){
          setCurrentImg(img);
      }
  return (
    <div className='detail-container'>
        <div className='detail-container-2'>
            <div className='game-detail-section'>
                <div className='game-image-section'>
                    <div className='game-main-image'>
                        <img src={currentImg} alt={game.name}></img> 
                    </div>
                    <div className='game-feature-image'>
                        <div className='game-image-slide' onClick={()=>setCurrentImg(game.image)}><img src={game.image} /></div>
                        {featureImgs.map(img=> <div className='game-image-slide' key={img.id} onClick={()=>setCurrentImg(img.imgurl)}>
                            <img src={img.imgurl}/>
                        </div> )}
                    </div>
                </div>
                <div className='game-feature-section'>
                    <div><h1>Features</h1></div>
                    <ul>
                    {features.map(feature=> <li key={feature.id}>{feature.description}</li>)}
                    </ul>
                </div>

            </div>
            <div className='game-text-section'>
                <div className='game-name-price'>
                    <h1>{game.name}</h1>
                    <h2>${game.price}</h2>
                </div>
                <div className='add-button-to-cart'>
                    <button>Add to cart</button>
                </div>
                <div className='delivery'>
                    <div className='ship-info'>
                        <div>
                            <span>
                            <FontAwesomeIcon className='truck-icon' icon={faTruck} />
                            </span>
                        </div>
                       
                        <div className='ship-content'>
                            <span className='free-shipping'>FREE Shipping <span className='free-ship-order' >on orders $35+</span></span>
                            <div>
                                <span className='arrive-time'>Arrives in 2 - 5 days</span>
                            </div>
                        </div>
                    </div>
                    <div className='ship-info'>
                        <div>
                            <span>
                            <FontAwesomeIcon className='truck-icon' icon={faTruck} />
                            </span>
                        </div>
                       
                        <div className='ship-content'>
                            <span className='free-shipping'>FREE Shipping <span className='free-ship-order' >on orders $35+</span></span>
                            <div>
                                <span className='arrive-time'>Arrives in 2 - 5 days</span>
                            </div>
                        </div>
                    </div>
                    <div className='ship-info'>
                        <div>
                            <span>
                            <FontAwesomeIcon className='truck-icon' icon={faTruck} />
                            </span>
                        </div>
                       
                        <div className='ship-content'>
                            <span className='free-shipping'>FREE Shipping <span className='free-ship-order' >on orders $35+</span></span>
                            <div>
                                <span className='arrive-time'>Arrives in 2 - 5 days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail