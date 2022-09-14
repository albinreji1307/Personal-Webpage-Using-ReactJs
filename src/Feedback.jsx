import React,{Component} from 'react';


import Sidebar from './Sidebar';
import './Contact.css'
import Nav from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


class Feeds extends Component{
  
        constructor(props) {
          super(props);
          this.state = { value: "" };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
          this.setState({ value: event.target.value });
        }
        handleSubmit(event) {
          var a = this.state.value;
          var re = /^[A-Za-z]+$/;
      
          if (re.test(a)) {
          } else {
            alert("Invalid Input");
          }
          event.preventDefault();
        }
        render() {
  


      return(
        <div>
        
   
  
  

        <div>
       
      
        
        

        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

        </Box>
  <div class="bow" >
    <Nav/>
      <Sidebar/>
  

<div><h2>Feedback</h2><br/><br/>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
           <form>
<TextField id="outlined-error-helper-text"  type="text"
                placeholder="Name"
                 value={this.state.value}
                 onChange={this.handleChange}
                 onBlur={this.handleSubmit}
                 required
                    label="Full Name" variant="outlined" style={{width:"500px"}}/><br/><br/>


<TextField id="outlined-error-helper-text" 
type="email"
placeholder="abc@gmail.com"
required
label="E-mail" variant="outlined" style={{width:"500px"}} /><br/><br/>
<TextField id="outlined-error-helper-text"
type="number"
placeholder=""
required
label="Phone" variant="outlined"  style={{width:"500px"}}/><br/><br/>
<TextField
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={8}
          style={{width:"500px"}}
        
        /><br/><br/>
        <Button variant='outlined' type="Submit">SEND</Button>

       </form>
         </Grid>
        
        <Grid item xs={5.2}>
        
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d501673.19142439927!2d76.18715312491062!3d10.786646190278336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1650744263597!5m2!1sen!2sin"    width="500" height="210" frameborder="0" scrolling="no">
                            </iframe>
                          
        </Grid>
        </Grid>
        </Box>
        </div>
        </div>
        </div>
       </div>
       
       );
       }
       }

export default Feeds;

