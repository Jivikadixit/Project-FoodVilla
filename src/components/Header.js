import {Link, useNavigate} from "react-router-dom"
import userContext from "../utils/userContext";
import {useContext,useState} from "react";
import {useSelector} from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import {logo} from "./Constants_StaticData"

export const HeaderComponent=()=>
{
  //const[btnNameReact,setBtnNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(userContext);
    const cartItems =useSelector((store )=>store.cart.items);
   const[isLoggedin,setIsLoggin]=useState(true);
   const navigate=useNavigate();
    //console.log(store);
   
return(

    <div  className="flex mb-2 justify-between w-full border border-purple-500 shadow-2xl bg-purple-600">
    <div>
      <img className="w-24 m-2" src={logo}></img>
      </div>
      <div className="Flex items-center">
    <ul className="flex p-4 m-4">
      <li className="px-4 py-2">Online Status:{onlineStatus?"✔":"🛑"}</li>
        <li className="px-4 py-2"><Link to="/">Home</Link></li>
        <Link to="/about"><li className=" px-4 py-2">About</li></Link>
        <Link to="/contact"><li className="px-4 py-2">Contacts</li></Link>
        <Link to="/Cart"><li className="px-4 py-2">🛒-{cartItems.length} </li></Link>
        <Link to="/profile"><li className="px-4 py-2">Profile</li></Link>
  
       <li>
       {isLoggedin ? (<button className="px-4 py-2 bg-blue-400 rounded-2xl" onClick={()=>setIsLoggin(false)}>Logout</button>):(<button className="px-4 py-2 bg-blue-400 rounded-2xl" onClick={()=>navigate("/login")}>Login</button>)}
        </li>  
  </ul>
    </div>
    </div>
);
};


//export default title;
