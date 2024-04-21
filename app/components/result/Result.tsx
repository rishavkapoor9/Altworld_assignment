'use client'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { useGlobalContext } from '@/app/Context/context';
import axios from 'axios';



interface Candidate {
    email: string;
    full_name: string;
    id: number;
    score: number;
    about_me: string;
    experience: string;
    hobbies: string;
    introduction: string;
    scores: [
        {
            max_score: number,
            min_score: number,
            user_score: number,
            score_type: string,

        }
    ]
}
// interface Data {
//     ass: any;
//     user: any ;// Update the type if needed
// }


const Result = () => {
    const { assId, setAssId, userId, setUserId } = useGlobalContext();
    // let candidate={};
    const [candidate, setCandidate] = useState('')

    useEffect(() => {
        if (assId) {
            // Fetch data based on contextData
            fetchData(assId, userId);
        }
    }, [userId]);
    const fetchData = async (ass: String, user: number) => {
        try {
            // Fetch data using contextData
            const response = await fetch(`https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${user}&assignment_id=${ass}`, { cache: 'no-store' });
            const data = await response.json();
            setCandidate(data)
            // Do something with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const img = "https://img.freepik.com/free-photo/close-up-beautiful-girl-portrait_23-2150799919.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713398400&semt=ais"
    // axios.get(`https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${userId}&assignment_id=${assId}`).then((res)=>{console.log("ressss"+res.data.scores);setCandidate(res.data);})
    // const data = fetch(`https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${userId}&assignment_id=${assId}`);

    // const candidate: Candidate[] = await data.json;

    const opts = {
        height: '640',
        width: '330',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div>
            {candidate && <div className='flex p-4 ml-8 mt-14  bg-white rounded-lg shadow-lg'>

                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mr-12'>
                            <img src={img} className='h-16 w-16 rounded-lg mr-6'></img>
                            <div className='block'>
                                <p className=' text-slate-800 font-bold text-sm'>{candidate.full_name}</p>
                                <p className='text-xs text-slate-500'>{candidate.email}</p>
                            </div>

                        </div>

                        <p className={candidate.score > 50 ? 'text-2xl font-extrabold text-green-500' : 'text-2xl font-extrabold text-orange-400 '}>{candidate.score + "%"}</p>

                    </div>
                    <div className='mt-6 text-sm'>
                        {candidate.scores.map((score: any,key: Number) =>
                            <div key={key} className='flex items-center justify-between'>
                                <p className='text-slate-500 text-xs font-bold'>{score.score_type}</p>
                                <div className='flex'>
                                    {/* <ProgressBar
                                        completed={score.user_score*10}
                                        className="w-40 mr-6 mb-1 rounded-lg "
                                        barContainerClassName="bg-slate-300 rounded-lg"
                                        completedClassName={"bg-green-500 rounded-lg w-"+score.user_score+"/12"}
                                        labelClassName="text-xs"
                                    /> */}
                                    {/* <progress className='bg-slate-400 text-green-500 rounded-lg' value={score.user_score/10} /> */}
                                    
                                    <p className={score.user_score<7?'text-orange-400 font-bold':'text-green-500 font-bold'}>{score.user_score+" / "+score.max_score}</p>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className='text-sm'>
                        <p className='font-bold mb-1 mt-16'>About</p>
                        <p className='text-slate-500 text-xs'>{candidate.about_me}</p>
                        <p className='font-bold mb-1 mt-8'>Experience</p>
                        <p className='text-slate-500 text-xs'>{candidate.experience}</p>
                        <p className='font-bold mb-1 mt-8'>Hobbies</p>
                        <p className='text-slate-500 text-xs'>{candidate.hobbies}</p>
                        <p className='font-bold mb-1 mt-8'>Introduction</p>
                        <p className='text-slate-500 text-xs'>{candidate.introduction}</p>
                    </div>
                    <div className='items-center text-center'><button className='py-2 px-20 mt-8 text-white text-sm font-bold bg-teal-400 rounded-lg hover:bg-teal-500'>SHORTLIST</button></div>

                </div>
                <div className=' rounded-lg ml-4'>
                    <YouTube videoId="p80VyQ5wLvg" opts={opts} />

                </div>
                {/* {userId}
        {assId} */}
            </div>}

        </div>

    )
}

export default Result