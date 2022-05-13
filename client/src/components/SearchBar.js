import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function SearchBar({searchText,onSearchTextChangeHanler, onfilterChange}) {
    const [filter,setFilter]=useState("Featured")

function changeHandler(e){

    onSearchTextChangeHanler(e.target.value)
}

function filterChange(e){
    setFilter(e.target.value)
    onfilterChange(e.target.value)
}

  return (
    <div className='search-container'>
        <div className='search'>
            <div className='search-icon'>
                 {/* <img src='https://www.pngitem.com/pimgs/m/47-474451_file-search-ballonicon2-svg-search-engine-optimization-search.png' alt="search icon" /> */}
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
           
            <input name="searchText" placeholder='Search games...' value={searchText} onChange={changeHandler}></input>

            <div className='sort'>
                <label htmlFor="sortby">Sort by:</label>

                <select id="sortList" className='sortList'value={filter} onChange={filterChange}>
                <option value="Featured">Featured</option>
                <option value="NameAZ">Name( A - Z )</option>
                <option value="NameZA">Name( Z - A )</option>
                <option value="PriceHtoL">Price(high to low)</option>
                <option value="PriceLtoH">Price(low to high)</option>
            </select>
            </div>
        </div>
        
        
    </div>
  )
}

export default SearchBar