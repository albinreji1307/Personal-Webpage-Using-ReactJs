import React,{Component} from 'react';

import Food from './Food';
import Paper from '@mui/material/Paper';
import Music from './Music';




import './Contact.css'
import NavF from './Favnav';

class Fav extends Component{
  render(){


      return(
        
  <div>
   
     
<section class="b123" >
  <div class="bok"> <NavF/></div>
  <br/>
<h1 class='bok'>MY FAVOURITES</h1>
<br/><br/>


            
            
              
            <Paper sx={{maxWidth:1100, marginLeft:20}}>
            <h2 class="bok">My Name is
              <br/> Albin,</h2>
              <p class='bok'>I like travel & Explore that help bring people closer together.Whenever <br/>I hear “favorite things,” it makes me think of The Sound of Music like<br/> Raindrops on roses 
              </p><br/>
              <br/>
            </Paper>
           
            
           
              <br/>      
            <br></br>  
        </section><br/>
        
       <Food/>
       
      
        <div>
          <Music/>
        </div>
      
        </div>
        )
       
        
    }
  
}

export default Fav;