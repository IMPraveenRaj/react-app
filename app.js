import React from "react";
import ReactDOM from "react-dom/client";
/* 
Header
    Logo
    Nav-items
Body
  --search
  --restaurantContainer
  --RestaurantCard
     -- image
     -- name of the restaurant
     -- star rating 
     -- cuisines 
     -- name of res, Star , Rating ,delivery tinme
Footer
  --copyright
  --Links
  --Addres      
  --contact
 */

//Lets create a Header Component

const Header = () => {
  return (
    <div className="header">
      <div className="logo-Container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
      />
      <h4>{props.resName}</h4>
      <h5>{props.cuisine}</h5>
      <h5>{props.rating}</h5>
      <h5>{props.deliveryTime}</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//React Component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
