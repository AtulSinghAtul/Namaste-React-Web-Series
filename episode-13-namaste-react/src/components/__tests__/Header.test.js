import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/addStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const loginButton = screen.getByRole("button");
  //const loginButton = screen.getByRole("button",{name:Login});
  //const loginButton = screen.getByRoText("login");
  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const cartItems = screen.getByText("Cart(0)");

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

// Using rejex to find cart

it("Should render header component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const cartItems = screen.getByText(/Cart/);

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const logInButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(logInButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  //Assertion
  expect(logOutButton).toBeInTheDocument();
});
