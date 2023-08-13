// import { Shimmer } from 'react-shimmer'

const Shimmer =()=>{
    return (
      <div className='flex flex-wrap bg-purple-200 shadow-2xl  p-2 m-2'>
        {Array(20).fill("").map(e=><div className='w-52 h-52 border border-gray-50 p-2 m-2'></div> )}
      </div>
    )
  }

export default Shimmer

{/* <div key={e} className='shimmer-card'></div> */}