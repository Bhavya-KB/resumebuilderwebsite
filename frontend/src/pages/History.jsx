import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

function History() {
  return (
    <>
    <div>
      <h1 className='text-center mt-5'> Downloaded Resume History</h1>
      <Link to={"/"} style={{marginTop:"-50px"}} className='float-end me-5'> BACK</Link>

      <Box component="section" className='container-fluid'>
        <div className='row mt-5'>

          <div className='col-md-4'>

          

             <Paper elevation={3} sx={{my: 5, p:2,textAlign:"center"}} >

                <div className='d-flex align-items-center justify-content-center'>
              <h6>Review At: <br/> 24/06/2025 , 7:35 PM</h6>
            </div>

            <div className='shadow p-3 mt-3'>
              <h2>Bhavya</h2>
              <h4>Webdeveloper</h4>
              <p><span>Kakkanad</span> | <span>bhavya@gmail.com</span> | <span>9657892773</span></p>
              <div className='d-flex gap-3 justify-content-center'>
                <Link href="">GITHUB</Link> |
                <Link href="">LINKEDIN</Link> |
                <Link href="">PORTFOLIO</Link>
              </div>
              <Divider sx={{fontSize:"20px"}}>Summary</Divider>
              <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat, maiores ducimus placeat repudiandae voluptatum tenetur magnam praesentium dolores ullam, accusantium quas aliquid magni adipisci tempora at ut aut voluptatibus.</p>
  
              <Divider sx={{fontSize:"20px",marginBottom:"10px"}}>Education</Divider>
              <h5>BTECH</h5>
              <p>Sree krishna | Anna university | 2025</p>
  
              <Divider sx={{fontSize:"20px",marginBottom:"10px"}}>Professional Experience</Divider>
              <h5>MEARN Full Stack</h5>
              <p>Luminar Technolab | Kakkanad | 6months</p>
  
              <Divider sx={{fontSize:"20px",marginBottom:"10px"}}>Skills</Divider> 
              <Stack spacing={2} direction={"row"} sx={{flexWrap:"wrap",gap:"10px",}} >
                <Button variant="contained">REACT</Button>
              </Stack>
            </div>
           </Paper>

          </div>

        </div>

      </Box>

      <div></div>
    </div>
    </>
  )
}

export default History