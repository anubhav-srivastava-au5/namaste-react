import * as config from '../config';
import { useContext } from 'react';
import userContext from '../utils/UserContext';
import RestaurantDetailsContext from '../utils/RestaurentDetailContext';

const RestaurentCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    const {user}=useContext(userContext);
    const {resData}=useContext(RestaurantDetailsContext)
    return (
        <div className='w-52 border border-gray-50 p-2 m-2'>
            <img alt="card" src={`${config.cloudinaryUrl}${cloudinaryImageId}`} />
            <h2 className='font-bold'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
            <h5 className='font-bold'>{user.name} - {user.email}</h5>
            <h6>{resData.name}-{resData.ratings}</h6>
        </div>
    )
}


export default RestaurentCard;