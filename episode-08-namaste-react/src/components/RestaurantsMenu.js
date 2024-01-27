import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  console.log(resId);

  async function fetchMenu() {
    const menuData = await fetch(MENU_URL + resId);

    const json = await menuData.json();

    setResInfo(json.data);

    // console.log(json);
  }

  if (resInfo == null) {
    return <Shimmer />;
  }

  // const { itemCards } =
  //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

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

      <div className="menuContainer">
        {itemCards?.map((item) => (
          <>
            <p>
              {item.card.info.name}: {item.card.info.price / 100}
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default RestaurantsMenu;
