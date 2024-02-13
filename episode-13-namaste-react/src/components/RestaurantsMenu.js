import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategorey from "./RestaurantCategorey";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  //! This Custom Hook only fetch the data from API
  const resInfo = useRestaurantMenu(resId);

  // console.log(resInfo);

  // console.log(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (categoreyItems) => {
        return (
          categoreyItems?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(categories);

  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="my-5">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>
            {cuisines.join(",")} {areaName}
          </p>
        </div>
        {/* categorey restaurent accordian */}
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Controlled Component */}
          {categories.map((categorey, index) => (
            <RestaurantCategorey
              key={index}
              data={categorey?.card?.card}
              showItems={showIndex == index}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
