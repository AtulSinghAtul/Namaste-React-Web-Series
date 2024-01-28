import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  //! This Custom Hook only fetch the data from API
  const resInfo = useRestaurantMenu(resId);

  console.log(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, sla } = resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  console.log(itemCards);

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{cuisines.join(",")}</p>
        <p>
          {areaName}, {sla.lastMileTravelString}
        </p>
      </div>

      {itemCards?.map((item) => (
        <div key={item.card.info.id} className="menuContainer">
          <p>
            {item.card.info.name}: {item.card.info.price / 100}
          </p>
        </div>
      ))}
    </>
  );
};

export default RestaurantsMenu;
