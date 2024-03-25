import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("Inside Restaurant Menu Fetch Menu");
    //setRestInfo("Rest info updated");
    const data = await fetch("Url");
    const json = await data.json();
    console.log(json);
  };

  //if (restInfo == null) return <Shimmer />;

  return restInfo == null ? (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
