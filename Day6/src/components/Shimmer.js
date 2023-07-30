import { Image, Shimmer } from 'react-shimmer'

// const Shimmer =()=>{
//     return (
//         <h1>Loading...</h1>
//     )
// }

// const Shimmer =()=>{
//   return (
//     <div>
//       <Image
//         src='https://source.unsplash.com/random/800x600'
//         fallback={<Shimmer width={800} height={600} />}
//       />
//     </div>
//   )
// }
const Shimmer =({width,height})=>{
    return (
      <div>
        <Image
          src="https://example.com/test.jpg"
          fallback={<Spinner width={width} height={height}/>}
        />
      </div>
    )
  }

export default Shimmer