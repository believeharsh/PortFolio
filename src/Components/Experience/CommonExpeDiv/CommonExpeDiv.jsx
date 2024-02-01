
function CommonExpeDiv(props){
   
  return (
    <>
      <div className="flex mx-auto mb-5 dark:border-white border-black border-b-[2px] px-3 py-5">
        <div className="md:flex-row flex-col justify-center mr-4">
          <div className="">
            <img
        
          src={`${props.ImageUrl}`}
    
              className="md:w-[200px] md:h-[120px] w-[100px] h-[80px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex ">
          <div className="mr-2">
            <div>
              <img
                src={`${props.logo}`}
                className="h-10 w-8"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="dark:text-white text-black">
              <p className="text-3xl mb-2">
                {props.company}<span className="text-xl ml-2">(current)</span>
              </p>
              <li className="text-xl">{props.location}</li>
              <li className="text-xl">{props.tanure}</li>
              <li className="text-xl">{props.skill}</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );


  
}

export default CommonExpeDiv;
