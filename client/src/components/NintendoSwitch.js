import React,{useState} from 'react'
import Game from './Game';
import SearchBar from './SearchBar';
import Pagination from './Pagination'
function NintendoSwitch({games}) {
  const [currentPage,setCurrentPage]=useState(1)
  // const [gamesPerPage,setGamesPerPage]=useState(8)
  const gamesPerPage=8;
 
  const [searchText,setSearchText]=useState("")
  const [sortList,setSortList]=useState(games)
  const [isSort,setIsSort]=useState(false)

  function onSearchTextChangeHanler(text){
   
    setSearchText(text)
  }
  
  function onfilterChange(filterValue){
    if(filterValue==="Featured"){
      setIsSort(false)
    }else if(filterValue==="NameAZ"){
      const sortGames=displayGames.sort((a, b) => a.name.localeCompare(b.name))
      setIsSort(true)
      setSortList(sortGames)
    }else if(filterValue === "NameZA"){
      const sortGames=displayGames.sort((a, b) => a.name.localeCompare(b.name)).reverse()
      setIsSort(true)
      setSortList(sortGames)
    }else if(filterValue === "PriceHtoL"){
      const sortGames=displayGames.sort(function(a, b){
        return b.price - a.price;
      })
     
      setIsSort(true)
      setSortList(sortGames)
    }else if(filterValue === "PriceLtoH"){
      const sortGames=displayGames.sort(function(a, b){
        return a.price - b.price;
      })
      
      setIsSort(true)
      setSortList(sortGames)
    }
}

  function paginate(number){
    setCurrentPage(number);
  }
  let displayGames=games.filter(game=> {return game.name.toLowerCase().includes(searchText.toLowerCase())})
  let displayGames2=sortList.filter(game=> {return game.name.toLowerCase().includes(searchText.toLowerCase())})
  const indexOfLastGame=currentPage * gamesPerPage
  const indexOfFirstGame=indexOfLastGame -gamesPerPage;
  let currentGames=displayGames.slice(indexOfFirstGame,indexOfLastGame)
  let currentGames2=displayGames2.slice(indexOfFirstGame,indexOfLastGame)
  return (
    <div className='page-container'>
      <div >
      <SearchBar searchText={searchText} onSearchTextChangeHanler={onSearchTextChangeHanler} onfilterChange={onfilterChange}/>
      </div>
      <div className='games-container'>
          
      {isSort? currentGames2.map(game=><Game key={game.id} game={game}/>) : currentGames.map(game=><Game key={game.id} game={game}/>)}
          

      </div>
      <div className='pagination'>
        <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  )
}

export default NintendoSwitch