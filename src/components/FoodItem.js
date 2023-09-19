import { IMG_CDN_URL } from "./Constants_StaticData";
const FoodItem=({name,description,imageId,price})=>{
console.log(name,description,imageId,price);
    return(
        <div className=" flex flex-col w-[300px] h-[500px] m-[5px] overflow-x-hidden p-[5px] shadow-2xl bg-slate-100">
            <div className="w-auto">
        <img src={IMG_CDN_URL+imageId}/>
        </div>
        <h2 className=" font-bold text-xl p-1 m-1 ">{name}</h2>
       <h3 className=" text-sm p-1 m-1 break-word  ">{description}</h3>
        <h4 className="font-bold text-slate-500 p-1 m-1">price={price/100}rps</h4>
        <button className="bg-blue-600 rounded-xl p-2 mt-auto ">Clear-Item</button>
    
     
        </div>
    
);
};

export default FoodItem;