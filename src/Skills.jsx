import React,{Component} from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import Sidebar from './Sidebar';
import './Contact.css'
import Nav from './Navbar';

class Skill extends Component{
  render(){


      return(
 
  <div class="bo">
    <Nav/>
      <Sidebar/>
<section class="add" >
<h2 class='education '>Skills</h2>
<br/><br/>
        
<h4>Programming languages</h4>
         <HtmlIcon color="warning" sx={{ fontSize: 70,marginLeft:"15px" }}/>
         <CssIcon color="dark" sx={{ fontSize: 70,marginLeft:"15px" }}/>   
         <JavascriptIcon color="dark" sx={{ fontSize: 70,marginLeft:"15px" }}/>           
            

         <br/><br/>
         <h4 >Project Done</h4>
         <h6>Hometown page using HTML / CSS / JS </h6>
        <h6> Personal Page</h6>
       
        <br/><br/>
         <h4>Electrical SKILLS</h4>
         <h6> HV Testing </h6>
        <h6>  Testing & COMMISSION</h6>
        <h6>   inductance / capacitance (quality) testing</h6>
        <br/>
       
              <br/>      
            <br></br><br></br><br></br>  
        </section>
        
        </div>
        )
       
        
    }
  
}

export default Skill;