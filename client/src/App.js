import React,{useState }from 'react'
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

function App() {
  const [isLogin,setIsLogin]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)

  return (
    <div className="App">
        <Header isLogin={isLogin} isAdmin={isAdmin}/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path='/home' element={<Home />}/>
          <Route path="/PlayStation" element={<PlayStation />} />
          <Route path="/NintendoSwitch" element={<NintendoSwitch />} />
          <Route path="/Xbox" element={<Xbox />} />
          <Route path="*" element={<ErrorPage />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
