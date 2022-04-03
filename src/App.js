import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import {Navbar} from './components/Navbar'
import {Home} from './components/Home'
import {Error} from './components/Error'
import {Favoritelist} from './components/Favoritelist'
import { GlobalProvider } from "./context/GlobalState";

const  App = () => {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/favorite" element={<Favoritelist />} />
              <Route  path="*" element={<Error />} />
            </Routes>
          </div>
        </>
      </Router>
    </GlobalProvider>
);
}

export default App;


