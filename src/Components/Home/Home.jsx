// import React from 'react'

function Home() {
    return (
      <div className=" w-full bg-slate-900 p-10"> 
      <div className="w-[90vw]  m-auto">
        <div className="bg-slate-500 p-3 rounded-xl shadow-sm flex justify-center items-center">
          <div className=" flex flex-wrap space-between p-4">
            <div className="flex flex-wrap flex-col justify-center items-center mr-8">
              <img src="/src/assets/Pictures/profile.png" alt="" className="flex w-[100px] h-[100px] rounded-[54%]" />
              <p className="text-lg bg-slate-800 rounded-xl p-[4px] pl-3 pr-3 mt-2 text-white font-serif hover:bg-slate-700 hover:b-1">Resume</p>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center ml-4">
              <div className="">
  
                <p className="md:text-[6vw] md:text-left text-center text-[10vw] tracking-tight text-white">Harsh Dahiya </p>
              </div>
  
              <div className="">
                <div className="pl-[5px] cursor-pointer justify-between text-white flex items-center shadow-black shadow-md hover:bg-white transition-all duration-300 hover:text-[#9ca8a8] border border-white rounded-[20px] h-[40px]">
                  <p className="md:text-[20px] text-[24px] whitespace-nowrap ml-[15px]">full stack developer </p>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="ml-[2rem] scale-125 mr-[8px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
                </div>
                <div className="">
                  <p className="text-white text-[16px]">Front-end Enginner - Microsys.In</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Home
  