import ResturantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  let listOfRestaurent = [
    {
      data: {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        city: "21",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "4.0",
      },
    },
    {
      data: {
        type: "F",
        id: "74454",
        name: "KFC's Pizza",
        city: "21",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "4.7",
      },
    },
    {
      data: {
        type: "F",
        id: "74455",
        name: " Pizza Hut",
        city: "21",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "3.7",
      },
    },
  ];

  return (
    <div className="body">
      <div className="search">Search</div>

      <button
        className="res-btn"
        onClick={() => {
          listOfRestaurent = listOfRestaurent.filter((res) => {
            return res.data.avgRating > 4.5;
          });
          console.log(listOfRestaurent);
        }}
      >
        restaurent button
      </button>

      <div className="res-container">
        {listOfRestaurent.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
