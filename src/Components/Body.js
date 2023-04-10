import {RestaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
    const[allRestaurants,setAllRestaurants] = useState([])
    const[filteredRestaurants,setFilteredRestaurants] = useState([])
    const[searchText,setSearchText] = useState("");

    const{ user  , setUser } = useContext(UserContext)

    useEffect(()=>{
            fetchData();
    },[])

    // custom Hook
    const isOnline = useOnline();

    // Condition
    if(!isOnline){
        return <h1>Offline, .........Please check Your Internet Connection.........</h1>
    }

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1173992&lng=72.888839&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

        if(!allRestaurants) return null;
  
    return (allRestaurants.length===0) ? (<Shimmer/>) : ( 
    <>
        <div className="p-3 bg-pink-50 my-5">
            <input type="text" className="p-2 m-2 focus:bg-blue-100" placeholder="search" value={searchText}
            onChange={(e)=> setSearchText(e.target.value)} />
            <button className="p-2 m-2  bg-black  hover:bg-blue-500  text-white  rounded-lg" 
            onClick={ ()=> {
                    const data = filterData(searchText,allRestaurants);
                        setFilteredRestaurants(data);
                    }}>Search  </button>

                    <input type="text" value={user.name} onChange={e=>setUser({
                        ...user,
                        name: e.target.value,
                    })}></input>
                    <input type="text" value={user.name} onChange={e=>setUser({
                        ...user,
                        name: e.target.value,   
                    })}></input>
                   
        </div>

        <div className="flex flex-wrap">
       { filteredRestaurants.map((restaurant) => {
          return <Link to ={"/restaurant/" + restaurant.data.id}  key={restaurant.data.id}> <RestaurantCard {...restaurant.data}/></Link>
        })}
         </div>
        </>
    )
}

export default Body;