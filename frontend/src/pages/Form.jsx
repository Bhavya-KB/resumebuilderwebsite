import React from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'

function Form() {
  return (
    <>
   <div className="container-fluid">
    <div className="row  mt-5">

        {/*STEPS  */}
        <div className="col-6 ">
            <Steps/>

        </div>

  {/*PREVIEW  */}

        <div className="col-6 ">
            <Preview/>

        </div>

    </div>
   </div>
    </>
  )
}

export default Form