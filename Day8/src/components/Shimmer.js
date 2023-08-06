// import { Shimmer } from 'react-shimmer'

const Shimmer =()=>{
    return (
      <div className='restaurent-shimmer-card'>
        {Array(20).fill("").map(e=><div className='shimmer-card'></div> )}
      </div>
    )
  }

export default Shimmer

{/* <div key={e} className='shimmer-card'></div> */}