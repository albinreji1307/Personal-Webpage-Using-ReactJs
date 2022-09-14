import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client'

    import './index.css';
    
    import About from './About'
    import Contacts from './Contact';
    import Edu from './Education';
    import Skill from './Skills';
    import Resume from './resume';
import AAA from './App';
import Hobbie from './Hobbies';
import Favourite from './Favourite';
import Feeds from './Feedback';
import Me from './Contactme';
import Fav from './fav';
import Food from './Food';
import Music from './Music';
import Music1 from './Music1';
import Food1 from './Food1';
import Gallery from './Gallery';
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
    <BrowserRouter>
                    
                    
           
               
                    <Routes>
                  
                <Route  path="/" element={<AAA/>} />
                <Route  path="/About" element={<About />}/>
                <Route  path="/Education" element={<Edu />}/>
                <Route  path="/Skill" element={<Skill />}/>
                <Route  path="/Hobbies" element={<Hobbie />}/>
                <Route  path="/Favourite" element={<Favourite />}/>
                <Route  path="/Resume" element={<Resume />}/>
                <Route  path="/Feedback" element={<Feeds />}/>
                <Route  path="/Contactme" element={<Me />}/>
                <Route  path="/fav" element={<Fav />}/>
                <Route path="/Food" element={<Food />}/>
                <Route path="/Music" element={<Music />}/>
                <Route path="/Music1" element={<Music1 />}/>
                <Route path="/Food1" element={<Food1 />}/>
                <Route path="/Gallery" element={<Gallery />}/>
                <Route  path="/Contact" element={<Contacts />}/>
                
    
           
           
                </Routes>
                      </BrowserRouter>
                       );