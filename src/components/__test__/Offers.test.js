import { render, screen } from "@testing-library/react";
import Offers from "../Offers";
import "@testing-library/jest-dom";

test("check offer page loaded or not ", () => {
  render(<Offers />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load text Offers inside offers component", () => {
  render(<Offers />);

  const targetext = screen.getByText("New Offers");

  expect(targetext).toBeInTheDocument();
});
