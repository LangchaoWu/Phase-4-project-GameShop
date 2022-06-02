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
import Admin from './components/Admin';
import UpdatePage from './components/UpdatePage';
import Cart from './components/Cart';
import { useNavigate} from 'react-router-dom'

function App() {
  const [isLogin,setIsLogin]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
  const [games,setGames]=useState([]);
  // const [psGames,setPSGames]=useState([]) 
  // const [xboxGames,setXboxGames]=useState([])
  // const [nsGames,setNSGames]=useState([])
  const [currentUser,setCurrentUser]=useState({})
  const [carts,setCarts]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    fetch('/authorized_user')
    .then(res=>res.json())   
    .then((user) => {
         if(user){

           setIsLogin(true);
          setCurrentUser(user);
          setCarts(user.carts)
          if(user.admin){
            setIsAdmin(true)
          }
        }
       
          
        });
      
    

    fetch("/games")
    .then(res=>res.json())
    .then(games=>{
      setGames(games);
      // const newPS=games.filter(game=>game.game_type==="PS5");
      // setPSGames(newPS);
      // const newXbox=games.filter(game=>game.game_type==="xbox");
      // setXboxGames(newXbox);
      // const newNS=games.filter(game=>game.game_type==="ns");
      // setNSGames(newNS);
    })

    navigate("/home")
  },[])
  
  const psGames=games.filter(game=>game.game_type==="PS5");
  // setPSGames(newPS);
  const xboxGames=games.filter(game=>game.game_type==="xbox");
  // setXboxGames(newXbox);
  const nsGames=games.filter(game=>game.game_type==="ns");
  // setNSGames(newNS);
  return (
    <div className="App">
        <Header isLogin={isLogin} setIsLogin={setIsLogin} isAdmin={isAdmin} setIsAdmin={setIsAdmin} currentUser={currentUser} setCurrentUser={setCurrentUser} carts={carts}/>
        <Routes>
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} setIsLogin={setIsLogin} setIsAdmin={setIsAdmin}setCarts={setCarts}/>} />
          <Route path="/create" element={<Create setCurrentUser={setCurrentUser} setIsLogin={setIsLogin} setCarts={setCarts}/>} />
          <Route path='/home' element={<Home />}/>
          <Route path="/PlayStation" element={<PlayStation  games={psGames} isAdmin={isAdmin}/>} />
          <Route path="/NintendoSwitch" element={<NintendoSwitch games={nsGames} isAdmin={isAdmin}/>} />
          <Route path="/Xbox" element={<Xbox games={xboxGames} isAdmin={isAdmin}/>} />
          <Route path="/games/:id" element={<Detail currentUser={currentUser} carts={carts} setCarts={setCarts} isAdmin={isAdmin}/>}/>
          <Route path="/admin" element={<Admin games={games} setGames={setGames}></Admin>}/>
          <Route path="/update/:id" element={<UpdatePage  games={games} setGames={setGames}></UpdatePage>} />
          <Route path="*" element={<ErrorPage />} ></Route>
          <Route path="/cart" element={<Cart currentUser={currentUser} carts={carts} setCarts={setCarts}/>}/>
        </Routes>
    </div>
  );
}

export default App;
