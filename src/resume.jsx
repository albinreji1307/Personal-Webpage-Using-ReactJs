import React from 'react';
import Myimg from './IMG_20220407_212025-01.jpeg'
import './resume.css'
import Sidebar from './Sidebar';
import Res from './NavRes';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



import Downlord from './Downlord';
   
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' :'white',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    
    export default function Resume(){
      return (
        <div class="bo2"> <br/>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md:0 }}>
            <Grid item xs={2.5}>
              <Item>
<Sidebar/>
<Res/>
	
   
   
        
        <br/>
        <br/>
        <div>
            
            <img class=" albinn" src={Myimg}  width= "155em" height="170em" alt="profile" />
              <h4 style={{color:'black',paddingLeft:'20px'}} >Albin Reji</h4>
        </div>
    <br/><h4>PERSONAL DETIALS</h4>
    <i class="home icon"></i><h > Plamoottil House Palakkayam Post Palakkad,Kerala ,678591 </h><br/><br/>
        <i class="mail icon"></i><h > albinreji1307@gmail.com</h><br/><br/>
            <i class="phone icon"></i><h>(+91) 7306325719</h><br/><br/>
              <i class="linkedin icon"></i><h >linkedin.com/in/albin-reji-679140237</h>
               
<br/><br/>
              <div class="cont" >
                
                  <img src='../gallery/cv.jpg' width="239px" height="179px" alt="FOOD"/>
                


              <div class="social-media">
               
             
                 
                  



 

  <React.Fragment>
    <CardContent>
     
     
    </CardContent>
    <CardActions>
      <Downlord/>
    </CardActions>
  </React.Fragment>




                    </div>
           </div>
</Item>





            </Grid>
            <Grid item xs={9.5 } >

              <Item>             
 
  	
      <h4>OBJECTIVE</h4>
  <h6>A Competent Electrical Engineer with a comprehensive knowledge of designing , developing and maintaince of Electrical system  and componet required specifications.
    Now focusing on Electrical and Software Section.As consistent track record successfully completing a mini project.
     I'm able to handle multiple projects simultaneously with high professionalism and accuracy. </h6>

     <h4>EDUCATION</h4>
    
        
        <h4 >U.G</h4>
        <div class="l"><h6>B.E Electrical And Electronics Engineering</h6>Christ the king engineering college</div>
        <p>June 2018 - June 2022</p>
       
        <h4>High Secondary</h4>
                <div class="l"><h6>Computer Science</h6>Govt H.S.S Pottassery</div>
                <p  >June 2016 - April 2018</p>
     
                <h4>High school</h4>
                <div class="l"><h6>SSLC</h6>Carmel High School Palakkayam</div>
        
                <div> <br/>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        	<h4>SKILLS</h4>
        	<ul class="subheading3">
        		<li>HTML / HTML5</li>
        		<li>CSS / CSS3</li>
        		<li class="skill-percentage">Javascript</li>
        		<li class="skill-percentage">Jquery</li>
        		<li class="skill-percentage">Bootstrap / Semantic-ui</li>
        		
            
        	</ul>
     
        </Grid>
        <Grid item xs={6}>
          <h4 >HOBBIES</h4> 
        <h6 class="subheading3"><p>Batminton</p>
        <p>Travel</p>
        <p>Cooking</p> </h6>
       
        </Grid>
     
      </Grid>
    </Box>
    <br/>
    </div>

          
		

    



	
  
  </Item>
            </Grid>
            
          </Grid>
        </Box>
        <br/>
        </div>
      );
    }
  
       




 