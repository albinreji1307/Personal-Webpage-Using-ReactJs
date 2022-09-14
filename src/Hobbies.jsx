import React,{Component} from 'react';

import Sidebar from './Sidebar';
import './Contact.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



import Grid from '@mui/material/Grid';
import BasicModal from './Batminton';
import Basic from './Travel'; 
import COOK from './Cooking'; 
import Box from '@mui/material/Box';
import Nav from './Navbar';
class Hobbie extends Component{
  render(){


      return(
 
  <div class="bo">
    <Nav/>
      <Sidebar/>
<section class="add" >

<h2 class='education '>Hobbies</h2>
<br/><br/>
<Box sx={{ width: '90%' }}>
   
   <Grid container spacing={6}>
     <Grid item xs={4}>
<Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        height="180"
        image='../gallery/BAT.jpg'
        alt="batmidon"
      />
     
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BATMINTON
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>Favorite Brand : Apacs</span>
        <p>  During my free time i mostly like to play Batminton becouse...
                              </p>     
         
        </Typography>
        
      </CardContent>
     <CardActions>
     <BasicModal/>
      
      </CardActions>
    </Card>
  

    </Grid>
        <Grid item xs={4}>
    <Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        height="180"
        image='../gallery/travel.webp'
        alt="batmidon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        TRAVEL
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span class="date"> Like to travel : North India</span>
        <p class="description">Tucked safely away at home, you can feel as if the entire...
                              </p>     
         
        </Typography>
       
      </CardContent>
      <CardActions>
        
      <Basic />
      </CardActions>
     
    </Card>
    </Grid>


    <Grid item xs={4}>
    <Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        height="180"
        image='../gallery/cooking.jpg'
        alt="batmidon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        COOKING
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span class="date">Try New Dishes</span>
        <p class="description"> Iam prepared the ingredients and cooked for myself...
                              </p>     
         
        </Typography>
      </CardContent>
      <CardActions>
        
        <COOK />
      </CardActions>
     
    </Card>
    </Grid>
      </Grid>
    
    </Box>
        

      
        </section>
      <br/><br/>
                  
                        <h6>Hobbies are often thought of as activities for people who lead quiet, relaxed lives. However, people with full,<br/>
                           busy, even stressful lives may need hobbies more than the average person,and benefit greatly from having hobbies in <br/>their lives.
                             Hobbies bring many benefits that usually make them more than worth the time they require</h6>
                    
        </div>
        )
       
        
    }
  
}

export default Hobbie;