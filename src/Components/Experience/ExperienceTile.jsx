// const ExperienceTile = (props) => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row mx-auto mb-5 dark:border-white border-black border-b-[2px] px-3 py-5 space-y-3 md:space-y-1 justify-center items-center">
//         <div className="md:flex-row flex-col justify-center mr-4">
//           <div className="">
//             <img
//               src={`${props.ImageUrl}`}
//               className="md:w-[240px] md:h-[170px] w-[200px] h-[120px] rounded-xl"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="flex ">
//           <div className="mr-2">
//             <div>
//               <img src={`${props.logo}`} className="h-10 w-8" alt="" />
//             </div>
//           </div>
//           <div className="">
//             <div className="dark:text-white text-black">
//               <p className="text-3xl mb-2">
//                 {props.company}
//                 <span className="text-xl ml-2">(current)</span>
//               </p>
//               <li className="text-xl">{props.location}</li>
//               <li className="text-xl">{props.tanure}</li>
//               <li className="text-xl">{props.skill}</li>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ExperienceTile;


const ExperienceTile = (props) => {
  return (
    <div className="flex flex-col mx-auto mb-8 px-6 py-5 border-b-2 border-gray-300 dark:border-gray-600 max-w-[1100px]">
      {/* Top Section */}
      <div className="flex items-center mb-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={`${props.ImageUrl}`}
            alt={`${props.title}`}
            className="h-[100px] w-[100px] lg:h-[120px] lg:w-[120px] rounded-full object-cover shadow-md"
          />
        </div>

        {/* Role and Company Info */}
        <div className="flex flex-col ml-6 w-full">
          {/* Role and Tagline */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold dark:text-white text-black">
              {props.title}
            </h2>
            {props.current && (
              <span className="text-lg lg:text-xl text-gray-500">(Current)</span>
            )}
          </div>
          {props.tagline && (
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
              {props.tagline}
            </p>
          )}

          {/* Company Logo and Name */}
          <div className="flex items-center mt-2">
            {props.logo && (
              <img
                src={`${props.logo}`}
                alt={`${props.company} logo`}
                className="h-8 w-8 lg:h-10 lg:w-10 mr-2"
              />
            )}
            <p className="text-xl lg:text-2xl font-medium dark:text-gray-200 text-gray-800">
              {props.company}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4 mt-4">
        {/* Location */}
        <p className="text-lg lg:text-xl dark:text-gray-300 text-gray-600">
          <strong>Location:</strong> {props.location}
        </p>

        {/* Tenure */}
        <p className="text-lg lg:text-xl dark:text-gray-300 text-gray-600">
          <strong>Tenure:</strong> {props.tenure}
        </p>

        {/* Description */}
        {props.description && (
          <p className="text-lg lg:text-xl dark:text-gray-200 text-gray-800">
            {props.description}
          </p>
        )}

        {/* Skills or Highlights */}
        {props.skills && props.skills.length > 0 && (
          <div>
            <h3 className="text-lg lg:text-xl font-semibold dark:text-white text-black mb-2">
              Key Highlights:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {props.skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-gray-700 dark:text-gray-300 text-base lg:text-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceTile;
