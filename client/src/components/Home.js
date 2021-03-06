import React,{useState} from 'react'
import { SliderData } from './SliderData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight,faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'

function Home() {
    const [current,setCurrent]=useState(0)
    const length=SliderData.length
    const navigate=useNavigate()

    function nextSlide(){
        setCurrent(current===length-1? 0: current +1)
    }
    function prevSlide(){
        setCurrent(current===0? length-1:current-1)
    }


  return (
    <div className='image-slider-container'>
       <FontAwesomeIcon className='slide-left-arrow' icon={faCircleChevronLeft} onClick={prevSlide}/>       
        {SliderData.map((slide,index) => { 
            return( <div className={current===index? "slide active":"slide"} key={index} >
                
                { current===index?
                  <div>  <img src={slide.image} alt={slide.name} key={index} className="slide-image"/> 
                     <button className='shop-now-btn' onClick={()=>{navigate(`/${slide.name}`)}}>Shop Now</button>
                  </div>:null
                }
                </div>)
            } )}
  
        <FontAwesomeIcon className='slide-right-arrow' icon={faCircleChevronRight} onClick={nextSlide}/>
    </div>
  )
}

export default Home