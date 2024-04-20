import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Assignment from './components/assignment/Assignment'
import Result from './components/result/Result'
import ProgressBar from 'react-bootstrap/ProgressBar';

// import { resultContext } from './Context/context'


export default function Home() {
  return (
    <main className='flex'>
      {/* <resultContext.Provider> */}
        <div>
        <Navbar />
      </div>
      <div>
        <Assignment />
      </div>
      <div>
        <Result />
      </div>
      {/* </resultContext.Provider> */}
      
      

    </main>
  )
}
