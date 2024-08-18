// jest.mock("../../img/fud-spot-log.png", () => "mocked-image-path");
// import logoHeaderImg from "../../img/fud-spot-log.png";

import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render Header component with FudSpot Corporate text", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const targetText = screen.getByText("FudSpot Corporate");

  expect(targetText).toBeInTheDocument();
});

it("should render Header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Sign in" });

  expect(loginButton).toBeInTheDocument();
});

it("should render Header component with cart item zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getAllByText(/Cart/i);
  expect(cartItem).toBeInTheDocument;
});

it("should change sign in to sign out on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );
  const signInButton = screen.getByRole("button", { name: "Sign in" });

  fireEvent.click(signInButton);

  const signOutButton = screen.getByRole("button", { name: "Sign out" });

  expect(signOutButton).toBeInTheDocument();
});
