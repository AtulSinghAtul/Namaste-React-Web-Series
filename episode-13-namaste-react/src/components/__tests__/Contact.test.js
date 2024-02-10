import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

test("Should load name inside contact us component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact us component", () => {
  render(<Contact />);
  // Querying
  const inputBoxes = screen.getAllByRole("textbox");

  console.log(inputBoxes.length);

  // Assertion
  expect(inputBoxes.length).toBe(2);
});
