import {createContext} from "react";
const userContext=createContext({user:{name:"Jivika Dixit" ,email:"jivika.dixit22@gmail.com" },});
//it will display given name in react hierarchy
userContext.displayName="userContext";
export default userContext;