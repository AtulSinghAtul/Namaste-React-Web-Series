import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mockData/resListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

globalThis.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("", () => {
  // beforeAll(() => {
  //   console.log("Before All test cases");
  // });

  // afterAll(() => {
  //   console.log("After All test cases");
  // });

  // beforeEach(() => {
  //   console.log("Beafore each test cases");
  // });

  // afterEach(() => {
  //   console.log("After each test cases");
  // });

  it("Should render the body Component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    // Query
    const cardsBeforeSearchInput = screen.getAllByTestId("resCard");
    // Assertion
    expect(cardsBeforeSearchInput.length).toBe(9);

    const searchBtn = screen.getByRole("button", {
      name: "search restaurants",
    });

    const searchInput = screen.getByTestId("searchInput");

    // fire event for onChange()
    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    // screen should load 4 res cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    // Assertion
    expect(cardsAfterSearch.length).toBe(1);
  });

  it("Should filter top rated Restaurents", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    // Query
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    // Assertion
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {
      name: "top rated restaurent",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(3);
  });
});
