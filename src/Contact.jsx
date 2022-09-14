import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import './Contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from './Navbar';
class Contact extends Component{
    render(){


        return(
            
    <div class="bo">
                    <Nav/>
        <div >
        <Sidebar/>
        </div>
        <div >

        </div>
        <section class="ac">
            
        <h1 class='education '>Albin <span class="aa" >REJI</span></h1>
           <div class="subheading mb-4">
                      <h4>  Plamoottil House , Palakkayam (P.O) ,Palakkad Kerala , 678591<br/>

                        <a class="subheading2" href=".com" >albinreji1303@gmail.com</a></h4>
                    </div>
                    <br/>
                    <h3 class="mb-0">About Me</h3>
                    <p>A Competent Electrical Engineer with a comprehensive knowledge of designing , developing and maintaince of Electrical system  and componet required specifications.<br/>
                        Now focusing on Electrical and Software Section.As consistent track record successfully completing a mini project.<br/>
                         I'm able to handle multiple projects simultaneously with high professionalism and accuracy</p>
                         
                         <Link to="/App" ><FacebookIcon color="primary" sx={{ fontSize: 40 }}/></Link>
                         <GitHubIcon color="dark" sx={{ fontSize: 40,marginLeft:"15px" }} />
                         <TwitterIcon color="primary" sx={{ fontSize: 40,marginLeft:"15px" }} />
                         <LinkedInIcon color="dark" sx={{ fontSize: 40,marginLeft:"15px" }} />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                       
                        
            
        </section>
        
      </div>
     
        )
       
        
    }
  
}

export default Contact;