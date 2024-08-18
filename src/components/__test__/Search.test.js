import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

isTypedArray("Should render the Body component with search", () => {
  render(
    <BrowserRouter>
      <Provider>
        <Body />
      </Provider>
    </BrowserRouter>
  );
});
