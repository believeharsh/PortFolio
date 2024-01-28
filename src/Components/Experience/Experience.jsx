import React from 'react'
import ExpHeader from './ExpHeader/ExpHeader';
import CommonExpeDiv from './CommonExpeDiv/CommonExpeDiv';

function Experience() {
  return (
   <>
   <div className="flex flex-col mx-4 pb-5 ">
     
    <div className="">
    <ExpHeader/>

    </div>

    <div className="mx-auto mt-4">
    <CommonExpeDiv/>
    <CommonExpeDiv/>
    <CommonExpeDiv/>
   


    </div>
 
   </div>

   </>
  )
}

export default Experience;
