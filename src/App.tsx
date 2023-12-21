import React from 'react';
import './App.css';
import {Profile} from "./loyaut/profile/Profile";
import {Header} from "./loyaut/header/Header";
import {Navbar} from "./loyaut/nav/Navbar";

function App() {
  return (
    <div className="appWrapper">
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
