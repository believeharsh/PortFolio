const  Tooltip = ({ message, children }) => {
  return (
      <div className="group relative flex">
        {children}
        <span className="tooltip-style">
          {message}
        </span>
      </div>
    );
}

export  default Tooltip;
