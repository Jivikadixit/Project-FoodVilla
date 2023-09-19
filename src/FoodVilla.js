import React, { Suspense } from "react";
import {lazy} from "react";
import  ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";
import store from "./utils/store"
// export by default title
import title from "./components/Header.js";
//export by name
import {HeaderComponent} from "./components/Header.js";
import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import shimmer from "./components/shimmer.js"
import Error from "./components/Error"
import About from "./components/About"
import Contact from "./components/Contact"
import {Cart} from "./components/Cart"
//import { InstaMart } from "./components/InstaMart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Login";
const Profile=lazy(()=>import("./components/Profile.js"));
//creating javascript object for restaurant cards
/*const BurgerKing=
{ 
    //using static data
    Name:"BurgerKing",
    image:"https://www.shutterstock.com/image-photo/incheon-south-korea-circa-june-2017-687045544",
    Tag:["American","Burger"],
    Rate:["4.2","star" ],
   

};*/
//api : / https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
 






const AppLayout=()=>
{
    return(
   <Provider store={store}>
   <div className="flex flex-col h-screen">
   <div className="sticky top-0 z-50"><HeaderComponent/></div>
    <div className="grow"><Outlet/></div> 
    <div className="bottom-0 z-50"><Footer/></div>
    </div>
    </Provider>
 
    );
};

//setting path to rout
const appRouter=createBrowserRouter([  
{
path:"/",
element:<AppLayout/>,
errorElement:<Error/>,
    children:[
        {
          path:"/about",
          element:<About/>,
        
       /* children:[
            {
                path:"profile",
                element:<Profile/>,
            },
        ],*/
    } ,
    {
        path:"/",
        element:<Body/>,
    },
    {
        path: "/contact",
        element: <Contact/>, 
    },
    {
        path: "/Cart",
        element: <Cart/>, 
    },
    {
        path: "/profile",
        element: 
        (<Suspense fallback={<h1>Profile is Loading </h1>}><Profile/></Suspense>), 
    },
   
    {//we can add any id here after restaurant
     path:"/restaurant/:resId",
     element:<RestaurantMenu/>
    },
   ],
  
    },
    {
        path:"login",
        element:<Login/>,
    
    },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);