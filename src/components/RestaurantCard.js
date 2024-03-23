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

export default RestaurantCard;
