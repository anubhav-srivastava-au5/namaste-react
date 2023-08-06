import * as config from '../config';


const RestaurentCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
    // console.log(cuisines,"-------------cuisinessssssssss")
    return (
        <div className='card'>
            <img alt="card" src={`${config.cloudinaryUrl}${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurentCard;