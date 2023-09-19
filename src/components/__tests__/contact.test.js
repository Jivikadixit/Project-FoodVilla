import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact";
describe("It is a Contact Page",()=>{
    test("component Loading for Contact",()=>{
        render(<Contact/>);
        //role means tags in html
       const heading= screen.getByRole("heading");
       expect(heading).toBeInTheDocument();
    });
    it("component Loading for Contact",()=>{
        render(<Contact/>);
        //role means tags in html
       const name= screen.getByPlaceholderText("name");
       expect(name).toBeInTheDocument();
    });
});
