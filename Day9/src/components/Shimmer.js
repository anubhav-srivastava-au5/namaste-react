// import { Shimmer } from 'react-shimmer'

const Shimmer =()=>{
    return (
      <div className='restaurent-shimmer-card'>
        {Array(20).fill("").map((e,index)=><div className='shimmer-card' key={index}></div> )}
      </div>
    )
  }

export default Shimmer

{/* <div key={e} className='shimmer-card'></div> */}