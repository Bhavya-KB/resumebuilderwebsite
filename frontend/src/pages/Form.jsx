import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function Form() {
   const [userInput,setUserInput] = useState({  //usestate is using in this userInput is the value, setUserInput is the function that need to be update
      profesionlData:{
        name:"",
        jobTitle:"",
        location:"",
        email:"",
        phone:"",
        github:"",
        linkedIn:"",
        portfolio:"",
  
  
      },
  
      educationData:{
        course:"",
         college:"",
          university:"",
           year:"",
  
  
      },
  
      experience:{
         jobRole:"",
          company:"",
           jobLocation:"",
            duration:"",
  
      },
  
      skill:[],
      summary:""
  
    }
  
    )
  return (
    <>
   <div className="container-fluid">
    <div className="row  mt-5">

        {/*STEPS  */}
        <div className="col-6 ">
            <Steps setUserInput={setUserInput} userInput={userInput}/>

        </div>

  {/*PREVIEW  */}

        <div className="col-6 ">
            <Preview userInput={userInput}/>

        </div>

    </div>
   </div>
    </>
  )
}

export default Form