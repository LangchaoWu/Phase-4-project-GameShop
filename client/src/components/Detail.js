import React from 'react'
import { useParams,useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faShop,faCircleUser,faCirclePlus,faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-regular-svg-icons'
// import { useParams } from 'react-router-dom';
function Detail({currentUser,carts,setCarts,isAdmin}) {
    const [game,setGame]=useState({})
    const params = useParams();
    const [currentImg,setCurrentImg]=useState(game.image)
    const [currentImgId,setCurrentImgId]=useState(game.id)
    const [featureImgs,setFeatureImgs]=useState([])
    const [features,setFeatures]=useState([])
    const [reviews,setReviews]=useState([])
    const [imgUrl,setImgUrl]=useState("")
    const [showAddImg,setShowAddImg]=useState(false)
    const [description,setDescription]=useState("")
    const [showAddFeatures,setShowAddFeatures]=useState(false)
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`/games/${params.id}`)
        .then(res => res.json())
        .then(data => {
        //   console.log(data)
          setGame(data)
          setCurrentImg(data.image)
          setFeatureImgs(data.images)
          setFeatures(data.features)
          setReviews(data.reviews)
          setCurrentImgId(data.id)
        })



      },[])
     
      function handleClick(){
        const newCart={
            user_id: currentUser.id,
            game_id: game.id
        }
        if(Object.keys(currentUser).length !==0){
        fetch(`/carts`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newCart)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setCarts([...carts,data])
          })
        }
        else{
            navigate("/login")
        }
      }
      function handleImageSubmit(e){
        e.preventDefault()
        const newImgUrl={
            imgurl:imgUrl,
            game_id:game.id
        }
        fetch(`/images`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newImgUrl)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.error){
              console.log(data.error)
              setShowAddImg(false)
              setImgUrl("")
            } else {
                setFeatureImgs([...featureImgs,data])
                setImgUrl("")
                setShowAddImg(false)
            }
          })
      }

      function handleFeatureSubmit(e){
        e.preventDefault()
        const newFeature={
            description:description,
            game_id:game.id
        }
        fetch(`/features`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newFeature)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.error){
              console.log(data.error)
              setShowAddFeatures(false)
              setDescription("")
            } else {
                setFeatures([...features,data])
                setDescription("")
                setShowAddFeatures(false)
            }
          })
      }

      function handleFeatureDelete(id){
        fetch(`/features/${id}`,{
            method:'DELETE'
        })
        .then(()=>{
            const newFeatures=features.filter(feature=> feature.id !==id)
            setFeatures(newFeatures)
        })
      }

      function handleImgDelete(){
        fetch(`/images/${currentImgId}`,{
            method:'DELETE'
        })
        
        .then(()=> { 
            if(game.id===currentImgId){
             console.log("cant delete this picture")
            }else{
                console.log(featureImgs)
                console.log(currentImg.id)
             const newFeatureImgs=featureImgs.filter(img=> img.id !== currentImgId)
             console.log(newFeatureImgs)
              setFeatureImgs(newFeatureImgs)
            }
        }

        )
      }
      
  return (
    <div className='detail-container'>
        <div className='detail-container-2'>
            <div className='game-detail-section'>
                <div className='game-image-section'>
                    {isAdmin?<FontAwesomeIcon className="add-img" icon={faCirclePlus} onClick={()=>setShowAddImg(!showAddImg)}/>:null}
                    {showAddImg?
                    <div className="add-form"onSubmit={handleImageSubmit}>
                    <form className='add-img-form'>
                        <label>Image</label>
                        <input name="image" value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)} />
                        <button type="submit">add image</button>
                    </form>
                </div>
                :
                null}
                    <div className='game-main-image'>
                        <img src={currentImg} alt={game.name}></img> 
                        {isAdmin? <FontAwesomeIcon icon={faCircleMinus} className="image-delete" onClick={handleImgDelete}/> :null}
                    </div>
                    <div className='game-feature-image'>
                        <div className='game-image-slide' onClick={()=>{setCurrentImg(game.image);setCurrentImgId(game.id)}}><img alt={game.name} src={game.image} /></div>
                        {featureImgs.map(img=> <div className='game-image-slide' key={img.id} onClick={()=> {setCurrentImg(img.imgurl) ;setCurrentImgId(img.id)}}>
                            <img alt={img.imgurl} src={img.imgurl}/>
                        </div> )}
                    </div>
                </div>
                <div className='game-feature-section'>
                    <div className='Feature-text'>
                        <h1>Features</h1>
                        {isAdmin?<FontAwesomeIcon className="add-feature" icon={faCirclePlus} onClick={()=>setShowAddFeatures(!showAddFeatures)}/>:null}
                        {showAddFeatures?
                        <div className="add-features-form"onSubmit={handleFeatureSubmit}>
                            <form className='add-img-form'>
                            <label>Feature</label>
                            <input name="image" value={description} onChange={(e)=>setDescription(e.target.value)} />
                            <button type="submit">add feature</button>
                         </form>
                        </div>
                        :
                        null}
                    </div>
                    <ul>
                    {features.map(feature=> 
                        <li key={feature.id}>{feature.description}    {isAdmin? <FontAwesomeIcon icon={faCircleMinus} className="feature-delete" onClick={()=>handleFeatureDelete(feature.id)}/> :null} </li>
                        // {/* {isAdmin? <FontAwesomeIcon icon={faCircleMinus}/> :null} */}
                        )}
                    </ul>
                </div>

            </div>
            <div className='game-text-section'>
                <div className='game-name-price'>
                    <h1>{game.name}</h1>
                    <h2>${game.price}</h2>
                </div>
                <div className='add-button-to-cart'>
                    <button onClick={handleClick}>Add to cart</button>
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
                            <FontAwesomeIcon className='truck-icon' icon={faClock} />
                            </span>
                        </div>
                       
                        <div className='ship-content'>
                            <span className='free-shipping'>Deliver Today </span>
                            <div>
                                <span className='arrive-time'>Check same day availability <span className='verify-address'>Verify Address</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='ship-info'>
                        <div>
                            <span>
                            <FontAwesomeIcon className='truck-icon' icon={faShop} />
                            </span>
                        </div>
                       
                        <div className='ship-content'>
                            <span className='free-shipping'>Pick up TOMORROW</span>
                            <div>
                                <span className='in-stock'>In stock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='review-container'>
            <div className='review-section'>
                <h1>Reviews</h1>
                {reviews.length !==0? reviews.map(review=> <div key={review.id} className="review-block">
                    <div className='review-text'>
                        <h2><FontAwesomeIcon icon={faCircleUser}/> {review.user.username}</h2>
                        <span>Rating: {review.rating}.0</span>
                        <p>Comment: {review.comment}</p>
                    </div>
                    
                </div>):<div  className='review-block-empty'>
                            <h2 >No reviews</h2>
                        </div>}
            </div>
        </div>
    </div>
  )
}

export default Detail