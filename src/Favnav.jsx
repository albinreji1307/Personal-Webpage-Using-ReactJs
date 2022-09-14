import React from 'react';
import {Link } from 'react-router-dom'
    import './Nav.css';
    import Button from '@mui/material/Button';
   

class NavF extends React.Component{
  render(){


      return(
 
        <div> 
 <div  className='nav' style={{marginLeft:"-5%"}} >
 <ul>
     <li>
         <Button> <Link to="/" style={{color:"grey"}}>Home</Link></Button>
     </li>
     <li>
     <Button><Link to="/Contact"  style={{color:"grey"}}>About Me</Link></Button>
     </li>
     
    <li>
     <Button><Link to="/Favourite" style={{color:"grey"}}>Back to Favourites</Link></Button>
     </li>
     </ul>
     </div>
     </div>   
      );
    }
}
export default NavF;