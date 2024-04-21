'use client';
import React, { useState } from 'react'
import { useGlobalContext } from '../Context/context';

interface Candidate {
    rev: any;
    short: any; // Update the type if needed
    assign: any; // Update the type if needed
}

const Candidates : React.FC<Candidate> = ({rev,short,assign}) => {
    const {assId, setAssId, userId, setUserId} = useGlobalContext();
    const [status, setStatus] = useState(1)
    const [selected, setSelected] = useState()
    const img = "https://img.freepik.com/free-photo/close-up-beautiful-girl-portrait_23-2150799919.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713398400&semt=ais"

    function clicked(ass: any,user: any){
        setSelected(user)
        setAssId(ass)
        setUserId(user)
    }

  return (
    <div>
        <div className='text-xs font-bold mb-2'>
                    <button className={status==1?'p-2 px-5 mr-3 shadow-md rounded-xl hover:bg-slate-200':'p-2 px-5 mr-3 rounded-xl hover:bg-slate-200'} onClick={()=>setStatus(1)}>TO REVIEW</button>
                    <button className={status==2?'p-2 px-5 shadow-md rounded-xl hover:bg-slate-200':'p-2 px-5  rounded-xl hover:bg-slate-200'} onClick={()=>setStatus(2)}>SHORTLISTED</button>
                </div>
                <div className='mt-8 mb-2 pr-4'>

                    <div className='flex justify-between items-center mb-2'>
                        <p className='text-xs text-slate-500'>CANDIDATE</p><p className='text-xs text-slate-500 mr-2'>SCORE</p>

                    </div>
                    {status==1?rev.map((candidate: any) =>
                        <div key={candidate._id} className={selected==candidate.id?'flex justify-between p-3 rounded-md items-center  cursor-pointer bg-slate-200':'flex justify-between p-3 rounded-md items-center  cursor-pointer'} onClick={()=>clicked(assign,candidate.id)} key={candidate.id}>
                            <div className='flex items-center'>
                                <img className='h-10 w-10 rounded-md mr-2' src={img} />
                                <div className='block'>
                                <p className=' text-slate-800 font-bold text-sm'>{candidate.full_name}</p>
                                <p className='text-xs text-slate-500'>{candidate.email}</p>
                                </div>
                                
                            </div>
                            
                            <p className={candidate.score>50?'text-lg font-extrabold text-green-500':'text-lg font-extrabold text-orange-400 '}>{candidate.score + "%"}</p>

                        </div>
                    ):
                    short.map((candidate: any) =>
                        <div key={candidate._id} className={selected==candidate.id?'flex justify-between p-3 rounded-md items-center  cursor-pointer bg-slate-200':'flex justify-between p-3 rounded-md items-center  cursor-pointer'} onClick={()=>clicked(assign,candidate.id)} key={candidate.id}>
                            <div className='flex items-center'>
                                <img className='h-10 w-10 rounded-md mr-2' src={img} />
                                <div className='block'>
                                <p className=' text-slate-800 font-bold text-sm'>{candidate.full_name}</p>
                                <p className='text-xs text-slate-500'>{candidate.email}</p>
                                </div>
                                
                            </div>
                            
                            <p className={candidate.score>50?'text-lg font-extrabold mr-0.1 text-green-500':'text-lg font-extrabold text-orange-400 mr-0.1'}>{candidate.score + "%"}</p>

                        </div>
                    )}


                </div>
    </div>
  )
}

export default Candidates