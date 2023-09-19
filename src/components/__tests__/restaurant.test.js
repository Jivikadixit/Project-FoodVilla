import { RestaurantCard } from "../RestaurantCard"
import {screen,render} from "@testing-library/react";
import "@testing-library/jest-dom";
import mockData from "../mocks/resCardMockData.json"

it("Should test RestaurantCard Component having props",()=>{
    render(<RestaurantCard resData={mockData}/>);
    const name=screen.getByAltText("Burger King");
    expect(name).toBeInTheDocument();
})