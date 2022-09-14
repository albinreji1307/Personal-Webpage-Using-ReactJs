import React from 'react';
import {Link } from 'react-router-dom'
    import './Nav.css';
    import Button from '@mui/material/Button';
   

class Nav extends React.Component{
  render(){


      return(
 
        <div> 
 <div  className='nav' style={{marginLeft:"-5%"}} >
 <ul>
     <li>
         <Button> <Link to="/" style={{color:"#013d52"}}>Home</Link></Button>
     </li>
     <li>
     <Button><Link to="/Contact"  style={{color:"#013d52"}}>About Me</Link></Button>
     </li>
     <li>
     <Button><Link to="/Contactme" style={{color:"#013d52"}}>Contact Me</Link></Button>
     </li>
     <li>
     <Button><Link to="/Resume" style={{color:"#013d52"}}>Resume</Link></Button>
     </li>
     <li>
     <Button><Link to="/Favourite" style={{color:"#013d52"}}>Favorites</Link></Button>
     </li>
    
     </ul>
     </div>
     </div>   
      );
    }
}
export default Nav;