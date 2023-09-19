
import {useState} from "react"
//section component contains titile and description props in destructred form
const Section=({title,description,link,isVisible,setIsVisible})=>{
    console.log("profile");
    return (
        <div className="p-2 m-2 border-spacing-0 border border-black"> 
            <h3 className="font-bold text-xl">{title}</h3>
            {
            isVisible?
            (<div>
            <p>{description}</p>
            <h1><a>{link}</a></h1>
            <button className="cursor-pointer underline" onClick={()=>setIsVisible(false)}>Hide</button>
            </div>)
            :
            (<div>
            <button className="cursor-pointer underline" onClick={()=>setIsVisible(true)}>Show</button>
            </div>)
            }
             </div>
     
    );
};
 const Profile=()=>{
    //manipulation each section visibility using keys paasing in useState
    const [visibleSection,setIsVisibleSection]=useState("about");
    return(
        <div>
        <h1 className="p-1 text-3xl m-2 font-bold">welcome to Profile Page ❤</h1>
        <Section 
         title={"LinkedIn"}
         description={"Connect me on LinkedIn"} 
         link={<a className="text-blue-600" href="https://www.linkedin.com/in/jivika-dixit-842946203/">LinkedIn</a>}
         isVisible={visibleSection==="linkedin"} 
         setIsVisible={()=>setIsVisibleSection("linkedin")}/> 

        <Section 
         title={"LeetCode"}
         description={"Visit my leetcode profile"} 
         link={<a className="text-blue-600" href="https://leetcode.com/Jivikadixit/">Leetcode</a>}
         isVisible={visibleSection==="leetcode"} 
         setIsVisible={()=>setIsVisibleSection("leetcode")}/> 

        <Section 
        title={"Github"}
        description={"Do checkout my Github Profile"}
        link={<a className="text-blue-600" href="https://github.com/Jivikadixit">Github</a>}
        isVisible={visibleSection==="github"} 
        setIsVisible={()=>setIsVisibleSection("github")}/>
        
        <Section title={"GeeksForGeeks"} 
        description={"Visit my GFG profile"} 
        link={<a className="text-blue-600" href="https://auth.geeksforgeeks.org/user/jivikadixit221/">GFG</a>}
        isVisible={visibleSection==='gfg'} 
        setIsVisible={()=>setIsVisibleSection("gfg")}/>
        </div>
    )
};
export default Profile;