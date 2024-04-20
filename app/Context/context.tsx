'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps{
    assId: String,
    setAssId: Dispatch<SetStateAction<String>>,
    userId: number,
    setUserId: Dispatch<SetStateAction<number>>,


}

const GlobalContext= createContext<ContextProps>({
    assId:  '',
    setAssId: (): String=>  '',
    userId:  0,
    setUserId: (): number=> 0,


})

export const GlobalContextProvider = ({children})=>{
    const [assId, setAssId] = useState('')
    const [userId, setUserId] = useState(0)

    return(
        <GlobalContext.Provider value={{assId,setAssId,userId,setUserId}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>useContext(GlobalContext)