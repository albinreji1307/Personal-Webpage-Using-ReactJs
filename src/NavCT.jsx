import React from 'react';
import {Link } from 'react-router-dom'
    import './Nav.css';
    import Button from '@mui/material/Button';
   

class CTnav extends React.Component{
  render(){


      return(
 
        <div> 
 <div  className='nab' style={{marginLeft:"-5%"}} >
 <ul>
    
     <li>
     <Button><Link to="/"  style={{color:"#013d52"}}><h6>Home</h6></Link></Button>
     </li>
     <li>
     <Button><Link to="/Feedback" style={{color:"#013d52"}}><h6>Feedback</h6></Link></Button>
     </li>
     <li>
     <Button><Link to="/resume" style={{color:"#013d52"}}><h6>Resume</h6></Link></Button>
     </li>
    
     </ul>
     </div>
     </div>   
      );
    }
}
export default CTnav;