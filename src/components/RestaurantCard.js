import {IMG_CDN_URL} from "./Constants_StaticData";

export const RestaurantCard=({name,cloudinaryImageId,areaName,cuisines,avgRating})=>
{
// const {name,cloudinaryImageId,areaName,cuisines,avgRating}=res.info;
return(
    //way one using JSX
/*<div className="card">
    <img className="logo" src="https://www.shutterstock.com/image-photo/incheon-south-korea-circa-june-2017-687045544"></img>
    <h1>Burger King</h1>
    <h2>American Burger</h2>
    <h3>4.1 Star</h3>
</div>*/
//way -2 using javascript object static data
/*<div className="card">
    <img src={BurgerKing.image}/>
    <h2>{BurgerKing.Name}</h2>
    <h3>{BurgerKing.Tag}</h3>
    <h4>{BurgerKing.Rate}</h4>
</div>*/
//way-3 accessing dynamic data using object
/*<div className="card">
     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurantList[0].info?.cloudinaryImageId}/>
    <h1>{restaurantList[0].info?.name}</h1>
    <h2>{restaurantList[0].info?.areaName} </h2>
    <h3>{restaurantList[0].info?.cuisines}</h3>
    <h4>{restaurantList[0].info?.avgRating}</h4>
    </div>*/
     //way-4 using props,passing attributes to functional component ,dynamic data
   /*  <div className="card">
     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.res.info?.cloudinaryImageId}/>
   // <h1>{props.res.info?.name}</h1>
  //  <h2>{props.res.info?.areaName} </h2>
  //  <h3>{props.res.info?.cuisines}</h3>
  //  <h4>{props.res.info?.avgRating}</h4>
  //  </div>*/
   //way-4 using object destructuring {name,cloudinaryImageId,areaName,cuisines,avgRating}

   <div className="flex flex-col w-[300px] h-[360px] m-[10px]  p-[10px] shadow-2xl bg-slate-100">
    <div className="rounded-xl"><img src={IMG_CDN_URL+cloudinaryImageId}/></div>
   <div >
   <h1 className="font-bold text-md px-1 py-1 m-1">{name}-<span className="font-serif text-md text-gray px-1 py-1 m-1">{areaName}</span></h1>
   <p className="font-serif text-sm px-1 py-1 m-1 word-wrap break-words">{cuisines.join(",")}</p>
   <h4 className="font-extralight text-xl px-1 py-1 mt-auto">Rating : <span className=" py-1 px-1 mt-auto border rounded-2xl " style={avgRating<4?{backgroundColor:"red"}:avgRating=="--"?{backgroundColor:"white", color:"black"} :{backgroundColor:"green"}}>{avgRating}⭐</span></h4>
   </div>
   </div>
    );
   
}
