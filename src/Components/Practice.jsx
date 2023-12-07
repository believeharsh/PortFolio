//  import React from 'react'

import { useState } from "react"


function Practice() {
    const ImageUrl = ['https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',

        'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=800',

        'https://images.pexels.com/photos/986774/pexels-photo-986774.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2661929/pexels-photo-2661929.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2661929/pexels-photo-2661929.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5149145/pexels-photo-5149145.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/17136612/pexels-photo-17136612/free-photo-of-desk-with-keyboards-and-screen.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2097184/pexels-photo-2097184.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]

    const [ActiveImage, setActiveImage] = useState(0);

    function onNextClick() {
    setActiveImage((ActiveImage + 1) % ImageUrl.length)
     console.log(ActiveImage)
     }

    function OnPreviousClick() {
        setActiveImage(!ActiveImage ? ImageUrl.length - 1 : ActiveImage - 1)

    }
    return (
        <div>

            <div className=" bg-slate-900 p-7">
                <div className="flex justify-center items-center m-auto p-2">
                    <button onClick={OnPreviousClick} className="text-white font-serif text-2xl m-1 border border-white rounded-xl p-2 hover:bg-slate-700  ">Previous</button>
                    <div className="">
                        <img src={ImageUrl[ActiveImage]} alt="" className="w-[300px] h-[250px] rounded-xl" />
                    </div>
                    <button onClick={onNextClick} className="text-white font-serif text-2xl m-1 border border-white rounded-xl p-2 hover:bg-slate-700  ">Next</button>
                </div>
            </div>

        </div>
    )
}

export default Practice
