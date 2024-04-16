const  Tooltip = ({ message, children }) => {
  return (
      <div className="group relative flex">
        {children}
        <span className="absolute top-10 scale-0 transition-all rounded-[9px] px-2 py-1 bg-black border-white  border-[0.5px] text-xs text-white group-hover:scale-100">
          {message}
        </span>
      </div>
    );
}

export  default Tooltip;
