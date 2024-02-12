import React, { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const { resData } = props;
  // console.log(resData);

  const { userLoggedIn } = useContext(userContext);

  // console.log(resData);

  //! Inline CSS
  // const styleCard = {
  //   backgroundColor: "#f4f0f1",
  //   width: "200px",
  //   height: "fit-content",
  //   border: "2px solid black",
  // };
  // const resLogo = {
  //   width: "100%",
  //   height: "55%",
  // };

  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="res-card flex flex-col gap-2  items-start w-[250px] h-fit bg-slate-100 p-5 m-5 rounded-md">
      <img
        className="rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{userLoggedIn}</h4>
    </div>
  );
};

export default ResturantCard;

//! Higher Order Component

export const withDiscountLabel = (ResturantCard) => {
  return (props) => {
    const { resData } = props;
    console.log(props);
    return (
      <>
        <div className="relative">
          <label className="absolute top-[35%] left-[20%] text-white font-bold text-lg">
            {resData?.aggregatedDiscountInfoV3?.header}
          </label>
          <ResturantCard {...props} />
        </div>
      </>
    );
  };
};
