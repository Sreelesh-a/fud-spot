import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import RestaurantCard from "../RestaurantCard";
import { screen } from "@testing-library/dom";
import { WithItemLabel } from "../RestaurantCard";

import { render } from "@testing-library/react";
import MOCK_DATA from "../mocks/restCardMock";
import "@testing-library/jest-dom";

it("should render RestaurantCard component according to props", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantCard restData={MOCK_DATA} />
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <WithItemLabel
          restData={MOCK_DATA}
          discountInfo={MOCK_DATA?.info?.aggregatedDiscountInfoV3 || null}
        />
      </Provider>
    </BrowserRouter>
  );
});
