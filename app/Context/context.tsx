'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ContextProps{
    assId: String,
    setAssId: Dispatch<SetStateAction<string>>,
    userId: number,
    setUserId: Dispatch<SetStateAction<number>>,


}

const GlobalContext= createContext<ContextProps>({
    assId:  '',
    setAssId: (): string=>  '',
    userId:  0,
    setUserId: (): number=> 0,


})

export const GlobalContextProvider = ({ children }: { children: ReactNode })=>{
    const [assId, setAssId] = useState('')
    const [userId, setUserId] = useState(0)

    return(
        <GlobalContext.Provider value={{assId,setAssId,userId,setUserId}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>useContext(GlobalContext)