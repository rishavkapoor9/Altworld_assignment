import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center mb-8 ml-2'>
                <FaRegUser />
                <p className='ml-2 font-medium'>Hi, Altworld</p>
            </div>
            <hr></hr>
            <div className='flex m-2 my-5 items-center'>
                <button className='text-teal-400 text-xl  bg-white p-2 rounded-xl inline-block mr-2 cursor-pointer hover:bg-slate-200'>
                    <IoHome />
                </button>
                <p className='text-sm'>Dashboard</p>
            </div>
            <div className='w-56  bg-teal-400 rounded-xl p-3 text-white text-xs'>
                <button className='text-sm text-slate-700 bg-white inline-block p-2 rounded-lg cursor-pointer hover:bg-slate-200 mb-4'>
                    <FaPlus />
                </button>
                <p className='font-bold mb-2'>New Assignment?</p>
                <p className='mb-3'>Select from pre-defined questions to have a quick turnaround.</p>
                <button className='text-xs font-bold text-slate-700 bg-white inline-block p-2 rounded-lg cursor-pointer hover:bg-slate-200 mb-2'>Create new assignment</button>
            </div>
        </div>
    )
}

export default Navbar