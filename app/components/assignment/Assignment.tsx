// 'use client';
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import Candidates from '../Candidates';

interface Assignment {
    id: number;
    duration_in_seconds: number;
    ends_at: number;
    link: string;
    status: string;
    title: string;
}
interface Candidate {
    email: string;
    full_name: string;
    id: number;
    score: number;
}

const Assignment = async () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data = await fetch("https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details");
    const assignment: Assignment[] = await data.json();
    const review = await fetch("https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=6&offset=0")
    const shortlisted = await fetch("https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=shortlisted&limit=6&offset=0")
    const rev: Candidate[] = await review.json();
    const short: Candidate[] = await shortlisted.json();

    const end = assignment.ends_at
    const month = Math.floor(end / 10000)
    const date = Math.floor(end / 100) % 100
    const year = end % 100


    return (
        <div>
            <div className='flex text-xs ml-8'>
                <p className='text-slate-600'>Pages </p><p className='font-bold'> / Assignment</p>
            </div>
            <p className='font-bold ml-8 mt-1 mb-3'>{assignment.title}</p>
            <div className='w-96 bg-white  ml-6 rounded-xl shadow-md py-1 px-3 '>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold'>{assignment.title}</p><p className={assignment.status==='Active'?'flex items-center font-bold text-green-500':'flex items-center font-bold text-orange-400'}>{assignment.status} <button className='p-2 shadow-md mb-4 ml-2 rounded-lg hover:bg-slate-200 mt-2 text-sm text-black'><MdEdit /></button></p>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                        <p className='text-sm font-bold text-slate-500'>Assignment link</p><a href={assignment.link} className='text-sm font-bold text-blue-500'>{assignment.link}</a>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                        <p className='text-sm font-bold text-slate-500'>Assignment Hour</p><p className='text-sm font-bold text-slate-500'>{Math.floor(assignment.duration_in_seconds / 3600) + " hours"}</p>

                    </div>
                    <div className='flex justify-between items-center mb-8'>
                        <p className='text-sm font-bold text-slate-500'>Assignment Ends at</p><p className='text-sm font-bold text-slate-500'>{date + " " + months[month - 1] + " 20" + year}</p>
                    </div>
                </div>
                <Candidates rev={rev} short={short} assign={assignment.id}/>
            </div>

        </div>
    )
}

export default Assignment