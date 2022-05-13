import React,{useState, useEffect }from 'react'
import './App.css';
import Header from './components/Header';
import { Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Create from './components/Create';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import PlayStation from './components/PlayStation';
import NintendoSwitch from './components/NintendoSwitch';
import Xbox from './components/Xbox';
import Detail from './components/Detail';

function App() {
  const [isLogin,setIsLogin]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
  const [games,setGames]=useState([]);
  const [psGames,setPSGames]=useState([])
  const [xboxGames,setXboxGames]=useState([])
  const [nsGames,setNSGames]=useState([])
  const [currentUser,setCurrentUser]=useState({})
  
  useEffect(()=>{
    fetch('/authorized_user')
    .then(res=>res.json())   
    .then((user) => {
         if(user){

           setIsLogin(true);
          setCurrentUser(user);
          if(user.admin){
            setIsAdmin(true)
          }
        }
          
        });
      
    

    fetch("/games")
    .then(res=>res.json())
    .then(games=>{
      setGames(games);
      const newPS=games.filter(game=>game.game_type==="PS5");
      setPSGames(newPS);
      const newXbox=games.filter(game=>game.game_type==="xbox");
      setXboxGames(newXbox);
      const newNS=games.filter(game=>game.game_type==="ns");
      setNSGames(newNS);
    })
  },[])
  

  return (
    <div className="App">
        <Header isLogin={isLogin} setIsLogin={setIsLogin} isAdmin={isAdmin} setIsAdmin={setIsAdmin} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} setIsLogin={setIsLogin} setIsAdmin={setIsAdmin}/>} />
          <Route path="/create" element={<Create setCurrentUser={setCurrentUser} setIsLogin={setIsLogin}/>} />
          <Route path='/home' element={<Home />}/>
          <Route path="/PlayStation" element={<PlayStation  games={psGames}/>} />
          <Route path="/NintendoSwitch" element={<NintendoSwitch games={nsGames}/>} />
          <Route path="/Xbox" element={<Xbox games={xboxGames}/>} />
          <Route path="/games/:id" element={<Detail />}/>
          <Route path="*" element={<ErrorPage />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
