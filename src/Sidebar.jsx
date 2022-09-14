import React from 'react';
import{Link} from 'react-router-dom';
import Myimg from './IMG_20220407_212025-01.jpeg'
import './Sidebar.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function Sidebar() {
  return (
    <div>
       <Box sx={{ width: '20%' }}>
   
   <Grid container spacing={6}>
     <Grid item xs={4}>
    <nav class=" a" id="sideNav" >
           <center class="allB">
              <img class=" albinn" src={Myimg}  width= "155em" height="170em" alt="profile" />
              <h4 style={{color:'white'}} >Albin Reji</h4>
              </center>
           
              <ul class="navbar-nav all1" style={{fontFamily:'sans-serif'}} > 
              
            <li> <Link to ="/">HOME</Link></li><br/><br/>
            <li> <Link to ="/Contact">ABOUT ME</Link></li><br/><br/>
            <li> <Link to ="/Education">EDUCATION</Link></li><br/><br/>
            <li> <Link to ="/Skill">SKILLS</Link></li><br/><br/>
            <li><Link to="/Hobbies">HOBBIES</Link></li><br/><br/>
            <li><Link to="/Favourite">FAVOURITES</Link></li><br/><br/>
            <li><Link to="/Resume">RESUME</Link></li><br/><br/>
            <li><Link to="/Feedback">FEEDBACK</Link></li><br/><br/>
            <li><Link to="/Contactme">CONTACT</Link></li><br/>

        </ul>
                  
                   
                    
                
            <div class="navbar-collapse" id="navbarResponsive">
                
               
            </div>
        </nav>
</Grid>
</Grid></Box></div>

        
       
    
       
        
           
            
           



            
          
          






               
  );
}