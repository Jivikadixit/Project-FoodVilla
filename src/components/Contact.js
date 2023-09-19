const Contact=()=>{
    return(
         <div>
<h1 className="font-bold text-lg p-2 m-2 ">Contact Us</h1>
 
<form>
<input type="text" placeholder="name" className="font-bold border border-black text-lg p-2 m-2 "/>
    <input type="text" placeholder="message" className="font-bold border border-black p-2 m-2 "/>
    <button type="button" placeholder="submit" className="font-bold p-2 m-2 bg-slate-300 ">Submit</button>

</form> 
   </div>
   
    );
};
export default Contact;