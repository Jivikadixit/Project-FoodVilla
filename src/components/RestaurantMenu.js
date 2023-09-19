
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import { addItem } from "../utils/cartSlice";
import { useDispatch  } from "react-redux";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "./Constants_StaticData";
import useRestaurant from "../utils/useRestaurant"; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api


const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useRestaurant(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  const dispatch =useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item));
  };

  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary h-[200px] bg-black text-white justify-center items-center flex overflow-y-hidden pl-[20px]">
        <img
          className="restaurant-img w-[250px] h-[170px] ml-[20px] mr-[20px] "
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details flex-col m-[20px] px-[30px] basis-[520px]">
          <h2 className="restaurant-title text-4xl py-2">{restaurant?.name}</h2>
          <p className="restaurant-tags text-xl py-2">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details flex ">
            <div
              className="restaurant-rating px-1 m-2 rounded-3xl"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor:"green" ,color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash px-1 m-2">|</div>
            <div className="px-1 m-2">{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash px-1 m-2">|</div>
            <div className="px-1 m-2">{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container mt-[30px]">
          <div className="menu-title-wrap p-[20px]">
            <h3 className="menu-title font-bold text-2xl p-2 m-2">Recommended</h3>
            <p className="menu-count font-semibold p-2 m-2">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list flex-col justify-center flex">
            {menuItems.map((item) => (
              <div className="menu-item justify-between p-[20px] flex" key={item?.id}>
                <div className="menu-item-details h-[auto] flex-col ">
                  <h3 className="item-title w-[auto] font-bold text-2xl p-1 m-1">{item?.name}</h3>
                  <p className="item-cost font-light text-xl p-1 m-1">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                
                </div>
                <div className="menu-img-wrapper w-[300px]">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn p-2 m-5 bg-blue-500 hover:bg-green-600" onClick={()=>handleAddItem(item)}> ADD Item </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;


//import {useEffect,useState} from "react";
/*import {useParams} from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
//import { restaurantMenuList } from "./Constants_StaticData";
import { IMG_CDN_URL } from "./Constants_StaticData";
//import shimmer from "./shimmer"
const RestaurantMenu=()=>{
    //destructuring id from useParam()
  const{resId}=useParams();
  const restaurant=useRestaurant(resId);
 
    return (

  <div className="Flex">
        <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        </div>
        <div>
         <h1>Menu</h1>
         <ul>     
           {Object.values(restaurant?.menu?.items).map((item)=>(
                <li key={item.id}>
                  {item.name}-{" "}
                  </li>
            ))}
            </ul> 
            </div>
            </div>
    );
}
          
export default RestaurantMenu;*/