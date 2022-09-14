import React from 'react';
import { NavLink, } from 'react-router-dom'
    import './Nav.css';
   
   

class Navv extends React.Component{
  render(){


      return(
 
        <div> 
 <div  className='nav' style={{marginLeft:"-20%"}}>
 <ul>
     <li>
         <NavLink to="/" style={{color:"white"}} >Home</NavLink>
     </li>
     <li>
     <NavLink to="/Contact" style={{color:"white"}} >About Me</NavLink>
     </li>
     <li>
     <NavLink to="/Contactme" style={{color:"white"}}>Contact Me</NavLink>
     </li>
     <li>
     <NavLink to="/Resume" style={{color:"white"}}>Resume</NavLink>
     </li>
     <li>
     <NavLink to="/Gallery" style={{color:"white"}}>Gallery</NavLink>
     </li>
     
    
     </ul>
     </div>
     </div>   
      );
    }
}
export default Navv;