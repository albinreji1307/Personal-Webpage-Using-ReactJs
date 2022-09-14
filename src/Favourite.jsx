import React,{Component} from 'react';

import Sidebar from './Sidebar';
import './Contact.css'

;



import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';


import Box from '@mui/material/Box';
import Nav from './Navbar';


class Favourite extends Component{
  render(){


      return(
       
  <div class="bo">
    <Nav/>
      <Sidebar/>
<section class="ad" >

<h2 class='education '>FAVOURITES</h2>
<br/><br/>
<Box sx={{ width: '90%' }}>
   
   <Grid container spacing={6}>
     <Grid item xs={4}>
     <div class="con">
     <Link to='/Food1'> <div class="img-con">
      <img src= "../gallery/food1.webp" alt="FOOD"/>
    </div></Link>
   
      <div class="user-info">
        <h2>food</h2>
        
      </div>
 
        </div>
  

    </Grid>
        <Grid item xs={4}>
        <div class="con">
        <Link to='/Music1'>  <div class="img-con">
      <img src="../gallery/txtmusic.jpeg" alt="Music"/>
      
    </div>
    </Link>
      <div class="user-info">
        <h2>MUSIC</h2>
        
      </div>

        </div><br/><br/><br/>
        <Link to='/fav'>  <Button variant="outlined" sx={{color:'black' ,marginLeft:"65px"}} ><h6>EXPLORE MORE</h6></Button></Link>
    </Grid>


    <Grid item xs={4}>
    <div class="con">
    <Link to='/Gallery'><div class="img-con">
   <img src="../gallery/789.jpg"alt="FOOD"/>
      
    </div></Link>
   
      <div class="user-info">
        <h2>GALLERY</h2>
        
      </div>
 
        </div>
    </Grid>
      </Grid>
    
    </Box>
   <div >
   
    </div>
        </section>
        
       
        </div>
       
            
        
        )
       
        
    }
  
}

export default Favourite;