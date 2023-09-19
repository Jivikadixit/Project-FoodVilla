const Shimmer=()=>
{
    console.log("shimmer");

 return(
    <div className="restaurant-list flex flex-wrap" >
        {
            Array(20)
            .fill("")
            .map((e,index)=>(<div key={index} className="bg-gray-500 w-56 h-26 margin-10"></div>))
        }
    </div>
 )
};
export default Shimmer;