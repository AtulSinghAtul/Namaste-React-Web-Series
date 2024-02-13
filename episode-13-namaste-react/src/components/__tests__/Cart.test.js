import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantsMenu from "../RestaurantsMenu";
import MOCK_DATA_NAME from "../mockData/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/addStore";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA_NAME) })
);

it("Should render res menu card", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  // query
  const accordionHeader = screen.getByText("Recommended (10)");
  fireEvent.click(accordionHeader);

  //Assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(12);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  expect(
    screen.getByText("Your Cart is Empety Please Add Some Items")
  ).toBeInTheDocument();
});
