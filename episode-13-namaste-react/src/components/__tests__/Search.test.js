import Body from "../Body";
import { render, screen } from "@testing-library/react";
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

it("Should render the body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // Query
  const searchBtn = screen.getByRole("button", { name: "search restaurants" });
  // Assertion
  expect(searchBtn).toBeInTheDocument();
});
