import {IMG_CDN_URL} from "../constants"
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId}) => {
    //  console.log(props);

    const { user } = useContext(UserContext)
      return (
          <div className="w-56 p-5 m-5 shadow-lg bg-pink-50">
              <img src={ IMG_CDN_URL + cloudinaryImageId} />
              <h2 className="font-bold text-xl">{name}</h2>
              <h3>{cuisines.join(", ")}</h3>
              <h4>{lastMileTravelString} minutes</h4>
              <h4>{user.name} </h4>
          </div>
      )
  }

  export default RestaurantCard;