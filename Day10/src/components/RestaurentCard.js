import * as config from '../config';

const RestaurentCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
        <div className='w-52 border border-gray-50 p-2 m-2'>
            <img alt="card" src={`${config.cloudinaryUrl}${cloudinaryImageId}`} />
            <h2 className='font-bold'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}


export default RestaurentCard;