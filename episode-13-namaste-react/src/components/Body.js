import { Link } from "react-router-dom";
import ResturantCard, { withDiscountLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { RESTAURANTS_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const arr = useState([]);
  const [listOfRestaurent, setListOfRestaurent] = arr;
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { userLoggedIn, setUserName } = useContext(UserContext);

  //* Whenever state variable update, react triggers a reconciliation cycle(re-render the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
    console.log("use effect called");
  }, []);

  //console.log("body rendered");

  //! old api url ("https://corsproxy.io/?https://wwwswiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

  //! https://corsproxy.io/?

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);

    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements?.infoWithStyle.restaurants
    // );
    setListOfRestaurent(
      //! optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //! checking user is online or offline
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline Please check your internet connection</h1>
    );
  }

  // let data4 = filteredRestaurent.filter(
  //   (discount) => discount.info.aggregatedDiscountInfoV3?.header
  // );

  // console.log(data4);

  //! using Higher Order Function
  const RestaurentCardDiscount = withDiscountLabel(ResturantCard);

  //! conditional rendering
  // if (listOfRestaurent.length == 0) {
  //   return <Shimmer />;
  // }

  //! turnory operator for conditional rendering
  return listOfRestaurent?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search flex justify-evenly items-center gap-12 h-8 bg-green-50 p-12">
        <div className="flex justify-center items-center gap-6">
          <input
            data-testid="searchInput"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="bg-green-100 rounded-md border-2 border-green-400 px-12 py-2 text-green-700 font-medium outline-none"
          />
          <button
            className="text-green-800 text-[20px] bg-white py-1 px-4 rounded-md"
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
            search restaurants
          </button>
        </div>
        <button
          className="text-green-800 text-[20px] bg-white py-1 px-4 rounded-md"
          onClick={() => {
            const filterList = listOfRestaurent?.filter((res) => {
              // console.log(res);
              return res.info.avgRating > 4.2;
            });

            setFilteredRestaurent(filterList);
            // console.log(listOfRestaurent);
          }}
        >
          top rated restaurent
        </button>
        {/* //! Updating live context data */}
        User:{" "}
        <input
          value={userLoggedIn}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="res-container flex flex-wrap justify-start items-start ml-7">
        {filteredRestaurent?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {}
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ===
            restaurant?.info.aggregatedDiscountInfoV3?.header ? (
              <RestaurentCardDiscount resData={restaurant?.info} />
            ) : (
              <ResturantCard resData={restaurant?.info} />
            )}
            {/* {console.log(restaurant?.info.aggregatedDiscountInfoV3?.header)} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
