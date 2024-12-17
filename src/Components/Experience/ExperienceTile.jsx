const ExperienceTile = (props) => {
  return (
    <div className="flex flex-col mx-auto mb-8 px-6 py-5 border-b-2 border-gray-300 dark:border-gray-600 max-w-full sm:max-w-[1100px]">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center mb-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <img
            src={`${props.ImageUrl}`}
            alt={`${props.title}`}
            className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px] rounded-full object-cover shadow-md"
          />
        </div>

        {/* Role and Company Info */}
        <div className="flex flex-col sm:flex-row sm:ml-6 w-full">
          {/* Role and Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:w-full mb-4 sm:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold dark:text-white text-black">
              {props.title}
            </h2>
            {props.current && (
              <span className="text-lg lg:text-xl text-gray-500">(Current)</span>
            )}
          </div>
          {props.tagline && (
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 sm:ml-6">
              {props.tagline}
            </p>
          )}

          {/* Company Logo and Name */}
          <div className="flex items-center mt-2 sm:mt-0 sm:ml-6">
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


