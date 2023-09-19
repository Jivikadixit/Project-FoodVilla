//here we will test header component
//this header component would contain store that come from react-redux and BrowserRouter so we will have to provide these inside render
import Header from "../Header";
import {screen,render} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";

it("should render Header Component with a login button",()=>{
   render( 
   <BrowserRouter>
   <Provider store={store}>
    <Header/>;
    </Provider>
    </BrowserRouter>
   );

    const btn=screen.getByRole("button");
    expect(btn).toBeInTheDocument();
})