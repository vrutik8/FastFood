import { useState, useEffect} from "react";
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (iid)=> {

    const[restaurant,setRestaurant] = useState(null);
    // get data from API

    useEffect(()=> {
        getRestaurantInfo();
    },[])
  
    async function getRestaurantInfo(){
      
      //  const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+iid);
  
      //  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1173992&lng=72.888839&restaurantId=11528");
  
       const data = await fetch(FETCH_MENU_URL + iid);
     
      const json = await data.json();
      console.log(json);
      setRestaurant(json.data)
    }

    // return restaurant data;

    return restaurant;

}

export default useRestaurant;