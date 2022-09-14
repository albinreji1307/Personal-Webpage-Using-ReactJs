import React from 'react';
import {Link } from 'react-router-dom'
    import './Nav.css';
    import Button from '@mui/material/Button';
   

class Res extends React.Component{
  render(){


      return(
 
        <div> 
 <div  className='nab' style={{marginLeft:"-20%"}} >
 <ul>
    
     <li>
     <Button><Link to="/Contact"  style={{color:"#013d52"}}><h6>About Me</h6></Link></Button>
     </li>
     <li>
     <Button><Link to="/Contactme" style={{color:"#013d52"}}><h6>Contact Me</h6></Link></Button>
     </li>
    
     </ul>
     </div>
     </div>   
      );
    }
}
export default Res;