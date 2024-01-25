import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const arr = useState([]);
  const [listOfRestaurent, setListOfRestaurent] = arr;
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  //* Whenever state variable update, react triggers a reconciliation cycle(re-render the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
    console.log("use effect called");
  }, []);

  //console.log("body rendered");

  //! old api url ("https://wwwswiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.4358011&lng=81.846311&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements?.infoWithStyle.restaurants
    // );
    setListOfRestaurent(
      //! optional chaining
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurent(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //! conditional rendering
  // if (listOfRestaurent.length == 0) {
  //   return <Shimmer />;
  // }

  //! turnory operator for conditional rendering
  return listOfRestaurent?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // filtered the restaurant card and update the ui
            // searchText
            // console.log(searchText);
            const filteredRestaurent = listOfRestaurent?.filter(
              (res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }
              //
            );
            setFilteredRestaurent(filteredRestaurent);
            console.log(filteredRestaurent);
            console.log(searchText + "2");
          }}
        >
          button
        </button>
      </div>

      <button
        className="res-btn"
        onClick={() => {
          const filterList = listOfRestaurent?.filter((res) => {
            // console.log(res);
            return res.info.avgRating > 4.2;
          });

          setFilteredRestaurent(filterList);
          // console.log(listOfRestaurent);
        }}
      >
        restaurent button
      </button>

      <div className="res-container">
        {filteredRestaurent?.map((restaurant) => (
          <ResturantCard
            key={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
