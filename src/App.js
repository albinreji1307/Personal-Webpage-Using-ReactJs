
import React from 'react';

    import './index.css';
   
   import {Link} from 'react-router-dom';
    import Button from '@mui/material/Button';
import Myimg from './IMG_20220407_212025-01.jpeg'

import Navv from './Navv';
class AAA extends React.Component{
  render(){


      return(
 <div>
        <Navv/>
       
            <div style={{marginTop:'15%', marginLeft:'30%'}} >
            
      <img src={Myimg}  class="albin" alt="mountian" width= "155em" height="190em" /><br/>
      <h3 style={{color:'white'}}>ALBIN REJI</h3>
      
         
      <Link to='/Contact'>  <Button variant="outlined" style={{color:'white'}} >More About Me</Button></Link><br/><br/><br/>
    
                </div>
                </div> 
      );
  }
    }
    

    export default AAA;