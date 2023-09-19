import restaurantList from "./Constants_StaticData.js";
import {RestaurantCard} from "./RestaurantCard.js";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom";
import { restaurantMenuList } from "./Constants_StaticData.js";
//import {filterData} from "../utils/helper"
//restaurant cards put inside body
export const Body=()=>{
   // const searchText="KFC";
   //for entering text in search box
    const[searchText,setSearchText]=useState("");
    //for updating variable(restaurant) use setRestaurant Function 
    //bydefualt restaurant value=>default value=>restaurantList
    
    const[restaurant,setRestraunt]=useState([]);
   // console.log(useState());
   const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    //useEffect
    useEffect(()=>{
      getRestaurants();
    },[]);
    async function getRestaurants()
    {
      //Mathura- const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     //Bamglore
     const data=await fetch( "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      for(let i=0;i<20;i++)
   console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[i].info);
    //when filter not applied restaurant data and filterdata value would be same
      setRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //console.log(restaurant.info);
    }
    //after applying filter display only the filteres data that include name as searchText
    function FilterData(searchText,restaurant)
    {
        //use local variable to manipulate

     const filterdata=restaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
     return filterdata;
    }
   //if(!restaurant) {return null};
  
    return restaurant?.length===0?
    (<Shimmer/>):(

      /*  <div className="RestrauntList">
        <RestaurantCard  res={restaurantList[0]}/>
        <RestaurantCard  res={restaurantList[1]}/>
        <RestaurantCard  res={restaurantList[2]}/>
        <RestaurantCard  res={restaurantList[3]}/>
        <RestaurantCard  res={restaurantList[4]}/>
        <RestaurantCard  res={restaurantList[5]}/>
        <RestaurantCard  res={restaurantList[6]}/>
        <RestaurantCard  res={restaurantList[7]}/>
        <RestaurantCard  res={restaurantList[8]}/>
        </div>*/
        <>
        <div className="p-4 m-1" >
       <input type="text" className="px-2 ml-10 border border-gray-500 rounded-xl text-2xl " placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}/>
       <button className="search-btn m-2 p-2 text-xl rounded-xl lg:bg-purple-500 sm:bg-cyan-300 hover:bg-red-500" onClick={()=>{const data=FilterData(searchText,restaurant); setFilteredRestaurants(data)}}>Search</button>
        
        </div>
        <div className="flex flex-wrap ml-[20px] mb-[20px]">
           { 
           //res is restaurantList object that traverse in restuarantList to fetch data from info 
           /* restaurant.map((res)=>{
           return <RestaurantCard {...res.info}/>
            })*/
            //showing after filtering datas

            filteredRestaurants?.map((res)=>{
              return <Link to={"/restaurant/" + res?.info?.id} key={res?.info.id}><RestaurantCard {...res.info}/></Link>
               })
        }   
        </div>
        </>
    );
};