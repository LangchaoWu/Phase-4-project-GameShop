import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'

function Pagination({gamesPerPage,totalGames,paginate,currentPage,setCurrentPage}) {
    const pageNumbers=[];
    function setPrevPage(){
        if(currentPage !== 1){
          setCurrentPage(currentPage=> --currentPage)
        }
      }
      function setNextPage(){
        if(currentPage < pageNumbers.length){
          setCurrentPage(currentPage=> ++currentPage)
        }
      }
    for(let i=1;i<=Math.ceil(totalGames/gamesPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <div className='pagination-container'>
         {pageNumbers.length<2?null:<FontAwesomeIcon className='pagination-arrow' icon={faAngleLeft} onClick={setPrevPage} />}
         {pageNumbers.map(number=>(
             currentPage===number?
             <p key={number} className="page-number-active" onClick={()=>paginate(number)}>{number}</p>
             :
             <p key={number} className="page-number" onClick={()=>paginate(number)}>{number}</p>
         ))}
         {pageNumbers.length<2?null:<FontAwesomeIcon className='pagination-arrow' icon={faAngleRight} onClick={setNextPage}/>}
    </div>
  )
}

export default Pagination