import {sum} from "../Sum.js";
test('check sum of 2 nums',()=>{
   const result=sum(2,5);
   //Assertion
    expect(result).toBe(7);
});