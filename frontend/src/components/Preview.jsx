import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import { Button, Divider, Link } from '@mui/material';
import Edit from './Edit';




function Preview({userInput}) { //{} is given because userInput is an object
  console.log(userInput);
  
  return (
    <>
      <Box component="section">

       <Stack direction={"row"} sx={{gap:"10px",display:"flex",justifyContent:"end",}} >
        <Edit/>
        {/* <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
          <FaEdit />
        </button> */}

       <p>
          <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
            <FaFileDownload />
          </button>
       </p>

      <p>
         <Link href={"/history"}>
            <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
              <FaHistory />
            </button>
         </Link>
      </p>

        <Link href={"/"}><p className='btn text-primary'>BACK</p></Link>
       
      </Stack>

      <div className='mt-5'>
           <Paper elevation={3} sx={{p:2,textAlign:"center"}} >
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
           </Paper>
      </div>
     
    </Box>

    </>
  )
}

export default Preview