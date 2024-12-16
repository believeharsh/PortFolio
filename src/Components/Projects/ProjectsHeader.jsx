import React from 'react'
import propTypes from 'prop-types' ; 

const ProjectsHeader = ({heading}) => {
  return (
    <>
      <div className="latest-project-div">
        <p className=" text-black dark:text-white  text-2xl px-1 py-1">{heading}
          <span className="border-b-[1px] border-black "></span>
        </p>

      </div>
    </>
  )
}
ProjectsHeader.propTypes = {
  heading :  propTypes.string.isRequired, 
}

export default ProjectsHeader
