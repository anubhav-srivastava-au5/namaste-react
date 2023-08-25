import {cloudinaryUrl} from '../config';

const FoodItem = ({imageId,name,description,price}) =>{
    console.log(imageId,name,"----------oooooooo");
    return (
        <div className='w-52 border border-green-50 p-2 m-2'>
            <img alt="cart-food-item" src={`${cloudinaryUrl}${imageId}`} />
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h5>Rupees : {price/100}</h5>
        </div>
    )
}

export default FoodItem