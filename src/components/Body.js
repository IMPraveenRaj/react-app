import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable - super powerful variable
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  /*  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
    );
    const json = await data.json();

    console.log(json);
    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   };*/

  return listofRestaurants.length == 0 ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard
          resName="meghna Foods"
          cuisine="Biryani, North Indian, Asian"
          rating="4.8 stars"
          deliveryTime="15 mins"
        />
        <RestaurantCard
          resName="Kfc "
          cuisine="Burger, Continental"
          rating="4.5 stars"
          deliveryTime="15 mins"
        />
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
