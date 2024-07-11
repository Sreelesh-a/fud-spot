const lat = 9.9312328;
const lng = 76.26730409999999;
let nextOffset = "CJhlELQ4KIDg8qu6oay4fjCnEzgE"; // This value might need to be updated dynamically

async function fetchMoreRestaurants() {
  const payload = {
    lat: lat,
    lng: lng,
    nextOffset: nextOffset,
    widgetOffset: {
      NewListingView_category_bar_chicletranking_TwoRows: "",
      NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
      Restaurant_Group_WebView_SEO_PB_Theme: "",
      collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
      inlineFacetFilter: "",
      restaurantCountWidget: "",
    },
    filters: {},
    seoParams: {
      seoUrl: "https://www.swiggy.com/",
      pageType: "FOOD_HOMEPAGE",
      apiName: "FoodHomePage",
    },
    page_type: "DESKTOP_WEB_LISTING",
    _csrf: "mtIetXQm4Tei-jEbnbVKvZ0Du8h7o6Pjz10jwdYA", // Ensure this is correct and up-to-date
  };

  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/update",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include any other necessary headers, such as session cookies
      },
      body: JSON.stringify(payload),
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log("Data:", data);
    nextOffset = data.data.nextOffset; // Update nextOffset for subsequent requests
    // Process the data as needed
  } else {
    const errorData = await response.json();
    console.error("Error fetching more restaurants:", errorData);
  }
}

// Initial fetch
fetchMoreRestaurants();
