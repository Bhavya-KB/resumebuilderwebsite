import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Information', 'Contact Details', 'Education Details','Work Experience','Skills and Certificates','Review And Submit'];


function Steps() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const SkillsSuggestionArray=["HTML","CSS","JAVASCRIPT","REACT","MONGODB","NODE JS"]

    const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepArrayContent =(stepCount) =>{
    switch (stepCount){
    case 0: return(
        <div>
            <h1>Personal Details</h1>
            <div className='d-flex row p-3 ' >

                 <TextField id="name" label="Full Name" variant="standard" />
                  <TextField id="job-title" label="Job Title" variant="standard" />
                   <TextField id="location" label="Location" variant="standard" />

            </div>
        </div>
    )

    case 1: return(
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
    )

      case 2: return(
        <div>
            <h1>Education Details</h1>
            <div className='d-flex row p-3 '>

                 <TextField id="course-name" label="Course Name" variant="standard" />
                  <TextField id="college-name" label="College Name" variant="standard" />
                   <TextField id="university" label="University" variant="standard" />
                    <TextField id="year-of-passout" label="Year of Passout" variant="standard" />
                    

            </div>
        </div>
    )

      case 3: return(
        <div>
            <h1>Professional Details</h1>
            <div className='d-flex row p-3 '>

             <TextField id="job-or-intership" label="Job or Internship" variant="standard" />
                <TextField id="company-name" label="Company Name" variant="standard" />
                <TextField id="company-location" label="Location" variant="standard" />
                <TextField id="duration" label="Duration" variant="standard" />
                   

            </div>
        </div>
    )

      case 4: return(
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
    )

      case 5: return(
        <div>
            <h1>Professional Summary</h1>
            <div className='d-flex row p-3 '>

             <TextField multiline rows={5}  id="professional-summary" label="Write a short summary of your yourself" variant="standard" />
                
                   

            </div>
        </div>
    )
    }
  }


  return (

    <>

    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}  </Typography>
          {renderStepArrayContent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>


    </>
  )
}

export default Steps