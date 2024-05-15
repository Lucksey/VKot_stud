import React from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import Login from "./components/Login/Login";
import LoginPage from "./components/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/login/*' element={<LoginPage/>}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
            <Sidebar/>
        </div>
    )
}

export default App;