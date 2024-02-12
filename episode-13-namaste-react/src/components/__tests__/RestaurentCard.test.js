import MOCK_DATA from "../mockData/resCardMockData.json";
import ResturantCard from "../RestaurantCard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { withDiscountLabel } from "../RestaurantCard";

it("Should render restaurentCard component with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  //Query
  const name = screen.getByText("Chicago Pizza");

  //Assertion
  expect(name).toBeInTheDocument();
});

it("Should render RestaurentCard component with discounted label", () => {
  // Home Work-  test this discoun t label
});
