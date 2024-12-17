import React from "react";
import ReactDOM from "react-dom/client";

import resDetails from "./restorentDetails";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="log-img"
          alt="Food logo"
          src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RestarentCard = (porps) => {
  // console.log(porps.restaurant);
  const { info, distance } = porps.restaurant;
  const { image, name, rating, cuisine, costText, locality, timing } = info;
  const showDiv = timing && timing.text && timing.text.trim().length > 0;
  const colour =rating.rating_color ?`#${rating.rating_color}`:'green';
  const ratingsColour ={backgroundColor:colour}

  return (
    <div className="restaurant-card">
      <div className="img">
        <img className="restaurent-img" alt="Restaurent imag" src={image.url} />
      </div>
      <div className="restaurent">
        <div className="restaurent-name-rating">
          <h4 className="text-truncate">{name}</h4>
          <p className="rating" style={ratingsColour}>{rating.aggregate_rating}&#x2606;</p>
        </div>
        <div className="restaurent-cusines-price">
          <p className="text-truncate">
            {cuisine.map((obj) => obj.name).join(", ")}
          </p>
          <p>{costText.text}</p>
        </div>
        <div className="restaurent-location">
          <p className="text-truncate">{locality.name}</p>
          {!showDiv && <p>{distance}</p>}
        </div>
        {showDiv &&  <div className="opening-time-distance">
          <p className="time">{timing.text}</p>
          <p>{distance}</p>
        </div>}
       
      </div>
    </div>
  );
};
const data = resDetails;
const BodyComponent = () => {
  return (
  
      <div className="restro-container">
        {data.map((resData, index) => {
          return <RestarentCard key={index} restaurant={resData} />;
        })}
      </div>
   
  );
};
const AppLayout = () => {
  return (
    <div className="container">
      <HeaderComponent></HeaderComponent>
      <BodyComponent />
    </div>
  );
};
const rootElemt = document.getElementById("root");
const render = ReactDOM.createRoot(rootElemt);
render.render(<AppLayout></AppLayout>);
