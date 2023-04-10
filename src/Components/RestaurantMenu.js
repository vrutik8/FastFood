import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';


const RestaurantMenu = () => {
  const{iid} = useParams();
   
   const restaurant = useRestaurant(iid)

  return (!restaurant) ? <Shimmer/> : (
    <div className='menu'>
    {/* <div>
      <h1>Restaurant menu : {restaurant?.id}</h1>
      <h2>{restaurant?.name}</h2>
      <h1>{restaurant?.area}</h1>
      <h1>{restaurant?.city}</h1>
      <h1>{restaurant?.costForTwoMsg}</h1>
      <img src={ IMG_CDN_URL + data.cards[0].card.card.info.cloudinaryImageId }/>
      </div> */}

      <div>
        <h1>Restaurant menu : </h1>
      </div>

      <div>
        {Object.values(restaurant?.menu?.items).map((item)=> {
          // return <li key={item?.id}>{item?.name}</li>

          return <li></li>

          return <li key={data.cards[0]?.card?.card?.info}>{item?.name}</li>
        })}
      </div>    
      
        {/* <div>
          {console.log(Object.values(restaurant?.menu?.items))}
        </div> */}

    </div>
  )
}

export default RestaurantMenu;
