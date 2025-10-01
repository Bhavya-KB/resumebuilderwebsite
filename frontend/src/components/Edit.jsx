import React from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:"auto",
  maxHeight:"90vh"
};

function Edit() {

     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const SkillsSuggestionArray=["HTML","CSS","JAVASCRIPT","REACT","MONGODB","NODE JS"]

  return (
    <>
    <div>
         <button onClick={handleOpen} className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
          <FaEdit />
        </button>

         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit your Resume
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <div>
                        <h1>Personal Details</h1>
                        <div className='d-flex row p-3 ' >
            
                             <TextField id="name" label="Full Name" variant="standard" />
                              <TextField id="job-title" label="Job Title" variant="standard" />
                               <TextField id="location" label="Location" variant="standard" />
            
                        </div>
                    </div>

                     <div>
                                <h1>Contact Details</h1>
                                <div className='d-flex row p-3 '>
                    
                                     <TextField id="email" label="Email" variant="standard" />
                                      <TextField id="phone-number" label="Phone Number" variant="standard" />
                                       <TextField id="github" label="GitHub Profile Link" variant="standard" />
                                        <TextField id="linkedin" label="LinkedIn Profile Link" variant="standard" />
                                         <TextField id="portfolio" label="Portfolio Profile Link" variant="standard" />
                    
                                </div>
                            </div>

                             <div>
                                        <h1>Education Details</h1>
                                        <div className='d-flex row p-3 '>
                            
                                             <TextField id="course-name" label="Course Name" variant="standard" />
                                              <TextField id="college-name" label="College Name" variant="standard" />
                                               <TextField id="university" label="University" variant="standard" />
                                                <TextField id="year-of-passout" label="Year of Passout" variant="standard" />
                                                
                            
                                        </div>
                                    </div>


                                     <div>
                                                <h1>Professional Details</h1>
                                                <div className='d-flex row p-3 '>
                                    
                                                 <TextField id="job-or-intership" label="Job or Internship" variant="standard" />
                                                    <TextField id="company-name" label="Company Name" variant="standard" />
                                                    <TextField id="company-location" label="Location" variant="standard" />
                                                    <TextField id="duration" label="Duration" variant="standard" />
                                                       
                                                </div>
                                            </div>

                                            <div>
            <h1>Skills</h1>
            <div className='d-flex align-items-center justify-content-center'>
                 <TextField sx={{width:"550px"}} id="skill" label="Add Skill" variant="standard" />
                 <Button variant="outlined">ADD</Button>    

            </div>
            <div className='mt-3'>
                <h4>Suggestions</h4>
            </div>

            <div className='d-flex flex-wrap gap-4 mt-3'>
                {
                    SkillsSuggestionArray.map((userSkill)=>(
                         <Button key={userSkill} variant="outlined">{userSkill}</Button>  


                    )
                )
                }


            </div>

            <div className='mt-3'>
                <h4>Added Skills:</h4>
                <span className='btn btn-primary me-3'>React<button className='text-light btn'>X</button></span>
            </div>
        </div>


        <div>
                    <h1>Professional Summary</h1>
                    <div className='d-flex row p-3 '>
        
                     <TextField multiline rows={5}  id="professional-summary" label="Write a short summary of your yourself" variant="standard" />
                        
                           
        
                    </div>
                </div>


                <div className='d-flex justify-content-end gap-4'>
                    <Button variant='outlined'>Clear</Button>
                      <Button variant='outlined'>Update</Button>
                </div>















          


          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default Edit